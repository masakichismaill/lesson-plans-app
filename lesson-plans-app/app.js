const express = require('express');
const app = express();
const port = 3000;

//ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//簡単なルートの設定

app.get('/',(req,res) =>{
    res.send('Hello World!');
});

//サーバーの起動
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});