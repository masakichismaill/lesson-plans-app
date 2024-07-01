const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

// 必要な他のモジュールをインポート
// 例: const someMiddleware = require('./middleware/someMiddleware');

app.use(express.static(path.join(__dirname, 'public'))); // 静的ファイルの提供

// セッション設定
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// ルートの設定
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 例: app.use(someMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
