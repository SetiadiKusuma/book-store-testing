Tahap Pertama
Install
Node.js
Instal setidaknya v12.16.1 atau lebih tinggi karena ini adalah versi LTS aktif terlama.
Hanya rilis yang merupakan atau akan menjadi rilis LTS yang didukung secara resmi.

VSCode

Langkah:

Cloning proyek ini.
Buka proyek di VSCode.
Buka terminal di VSCode.
Jalankan npm install untuk menginstal modul node.
masuk ke dalam link  https://bookstore.toolsqa.com/swagger/
buat akun dengan mengisi “username”, “Password” seperti gambar tersebut, lalu klik execute.
![1](https://github.com/SetiadiKusuma/book-store-testing/assets/73929770/3ae6a2f3-32c9-43a1-8bed-7c2db94b2737)
apabila berhasil akan muncul respone body yang berisi “userID”
![PLACEHOLDER_1497952302a1ee49_1](https://github.com/SetiadiKusuma/book-store-testing/assets/73929770/a09b2443-79e4-48cc-a5be-8649ac9dc0f6)
lakukan execute pada tahap seperti gambar berikut
![generate token](https://github.com/SetiadiKusuma/book-store-testing/assets/73929770/8613cadf-d2d1-41e3-8a41-afb46904c8ca)
apabila berhasil akan muncul respon body yang berisi “Token”.
![token](https://github.com/SetiadiKusuma/book-store-testing/assets/73929770/1474f1d9-ebcb-4762-b7f9-9cc97ce604e2)
buat env yang berisi “USERNAME”, “PASSWORD”, “USERID”, “TOKEN, dan “BASEURL"
lalu buat testscrip untuk menjalankan automation test
Jalankan npm run wdio untuk menjalankan test.

Jawaaban Soal Terori:
https://docs.google.com/document/d/1N506OIxQkOU102MSJmkzfZBApPV9EedNyxCk1YlMwSM/edit?usp=sharing
