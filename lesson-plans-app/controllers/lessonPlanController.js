// lessonPlanController.js
const LessonPlan = require('../models/lessonPlan'); // レッスンプランモデルのインポート

// レッスンプラン追加用のコントローラー関数
exports.addLessonPlan = async (req, res) => {
    const { title, description } = req.body; // リクエストボディからタイトルと説明を取得
    try {
        const newLessonPlan = new LessonPlan({ title, description }); // 新しいレッスンプランインスタンスを作成
        await newLessonPlan.save(); // データベースに保存
        res.status(201).send('レッスンプランが正常に追加されました'); // 成功メッセージを返す
    } catch (error) {
        console.error('レッスンプラン追加エラー:', error); // エラーログをターミナルに出力
        res.status(400).send(`レッスンプランの追加に失敗しました: ${error.message}`); // エラーメッセージを返す
    }
};