const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const authRoutes = require('./routes/authRoutes'); // ルートのインポート

// ミドルウェアの設定
app.use(express.json()); // リクエストのJSONパース
app.use(express.urlencoded({ extended: true })); // URLエンコードされたデータのパース

// MongoDBに接続
mongoose.connect('mongodb+srv://masakichi:OEUiPs3hSI3BawqN@lesson-plans-cluster.c8rcmf4.mongodb.net/?retryWrites=true&w=majority&appName=lesson-plans-cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDBに接続されました'); // 接続成功時のログ
}).catch((err) => {
    console.error('MongoDBへの接続に失敗しました', err); // 接続失敗時のログ
});

// ルートの設定
app.use('/auth', authRoutes); // /authへのリクエストをauthRoutesにルーティング

app.get('/', (req, res) => {
    res.send('こんにちは!'); // ルートへのアクセスに対してHello Worldを返す
});
// register.htmlを表示するルートを追加
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});
// サーバーの起動
app.listen(port, () => {
    console.log(`サーバーは http://localhost:${port} で実行中です`); // サーバー起動時のログ
});
