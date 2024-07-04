const User = require('../models/user'); // ユーザーモデルのインポート
const bcrypt = require('bcrypt'); // パスワードハッシュ用のライブラリをインポート
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

//ユーザーログイン用のコントローラー関数
exports.login = async (req, res) =>{
    const { username, password } = req.body; //リクエストボディからユーザー名とパスワードを取得
    try {
        const user =await User.findOne({ username }); //データベースからユーザーを検索
        if (!user) {
            return res.status(400).send('ユーザーが見つかりません'); //ユーザーが見つからない場合のエラーメッセージ
        }
        const isMatch = await bcrypt.compare(password, user.password); //パスワードの比較
        if (!isMatch) {
            return res.status(400).send('無効な認証情報です'); //パスワードが一致しない場合のエラーメッセージ
        }
        res.status(200).send('正常にログインしました'); //ログイン成功メッセージを返す
    }catch (error) {
        res.status(500).send('サーバーエラー'); // サーバーエラーメッセージを返す
    }
};