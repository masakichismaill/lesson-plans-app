const User = require('../models/user'); // ユーザーモデルのインポート

// ユーザー登録用のコントローラー関数
exports.register = async (req, res) => {
    const { username, password } = req.body; // リクエストボディからユーザー名とパスワードを取得
    try {
        const newUser = new User({ username, password }); // 新しいユーザーインスタンスを作成
        await newUser.save(); // データベースにユーザーを保存
        res.status(201).send('ユーザーが正常に登録されました'); // 成功メッセージを返す
    } catch (error) {
        res.status(400).send('ユーザーの登録に失敗しました'); // エラーメッセージを返す
    }
};
