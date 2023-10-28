const { default: axios } = require("axios");
const { expect } = require("chai");

describe('Create Books', () => {

  it('gagal create book dengan isbn yang sudah ada', async () => {

    let payload = {
      userId: process.env.USERID,
      collectionOfIsbns: [
        {
          isbn: "9781449325862",
          title: "book5"
        }
      ]
    }

    let result = null

    try {

      result = await axios({
        method: 'post',
        url: `${process.env.BASEURL}/Books`,
        data: payload,
        headers: {
          Authorization: 'Bearer ' + process.env.TOKEN
        }
      })


    } catch (error) {
      result = error
    }

    console.log(result)
    expect(result.response.status).to.equal(400);
    expect(result.response.data.message).to.equal("ISBN already present in the User's Collection!");

  })


  it('create book dengan isbn yang belum tersedia', async () => {

    let payload = {
      userId: process.env.USERID,
      collectionOfIsbns: [
        {
          isbn: "978144932586$"+(Math.random().toFixed(2)*100).toString(),
          title: "book"+(Math.random().toFixed(2)*100).toString()
        }
      ]
    }

    let result = null

    try {

      result = await axios({
        method: 'post',
        url: `${process.env.BASEURL}/Books`,
        data: payload,
        headers: {
          Authorization: 'Bearer ' + process.env.TOKEN
        }
      })


    } catch (error) {
      result = error
    }

    // console.log(result)
    expect(result.response.status).to.equal(400);
    expect(result.response.data.message).to.equal("ISBN supplied is not available in Books Collection!");
  })
})
