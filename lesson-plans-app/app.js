const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const authRoutes = require('./routes/authRoutes');
const lessonPlanRoutes = require('./routes/lessonPlanRoutes');

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDBに接続
mongoose.connect('mongodb+srv://masakichi:OEUiPs3hSI3BawqN@lesson-plans-cluster.c8rcmf4.mongodb.net/?retryWrites=true&w=majority&appName=lesson-plans-cluster')
    .then(() => {
        console.log('MongoDBに接続されました');
    })
    .catch((err) => {
        console.error('MongoDBへの接続に失敗しました', err);
    });

// ルートの設定
app.use('/auth', authRoutes);
app.use('/lessonPlans', lessonPlanRoutes);

app.get('/', (req, res) => {
    res.send('こんにちは!');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

// サーバーの起動
app.listen(port, () => {
    console.log(`サーバーは http://localhost:${port} で実行中です`);
});