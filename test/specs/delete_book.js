const { default: axios } = require("axios");
const { expect } = require("chai");

describe('Delete Book', () => {

  it('gagal delete book dengan userId yang salah', async () => {

    let payload = {
      userId: process.env.USERID,
      collectionOfIsbns: [
        {
          isbn: "9781449325862",
          userId: process.env.USERID+(Math.random().toFixed(2)*100).toString()
        }
      ]
    }

    let result = null

    try {

      result = await axios({
        method: 'delete',
        url: `${process.env.BASEURL}/Books`,
        data: payload,
        headers: {
          Authorization: 'Bearer ' + process.env.TOKEN
        }
      })


    } catch (error) {
      result = error
    }

    expect(result.response.status).to.equal(401);
    expect(result.response.data.message).to.equal("User Id not correct!");

  })


  it('gagal delete book dengan isbn yang salah', async () => {

    let payload = {
      userId: process.env.USERID,
      collectionOfIsbns: [
        {
          isbn: "9781449325862",
          userId: process.env.USERID
        }
      ]
    }

    let result = null

    try {

      result = await axios({
        method: 'delete',
        url: `${process.env.BASEURL}/Books`,
        data: payload,
        headers: {
          Authorization: 'Bearer ' + process.env.TOKEN
        }
      })


    } catch (error) {
      result = error
    }


    expect(result.response.status).to.not.equal(200);
  })
})
