const LessonPlan = require('../models/lessonPlan'); // レッスンプランモデルのインポート
const mongoose = require('mongoose'); // Mongooseをインポート

// レッスンプラン追加用のコントローラー関数
exports.addLessonPlan = async (req, res) => {
    const { title, description, createdBy } = req.body; // リクエストボディからタイトル、説明、作成者を取得
    console.log('リクエストボディ:', req.body); // リクエストボディをログに出力

    // createdBy を ObjectId に変換
    let createdByObjectId;
    try {
        createdByObjectId = new mongoose.Types.ObjectId(createdBy);
        console.log('ObjectIdに変換成功:', createdByObjectId); // ObjectId変換成功時のログ
    } catch (error) {
        console.error('ObjectIdに変換失敗:', createdBy); // ObjectId変換失敗時のログ
        return res.status(400).send('Invalid user ID format');
    }

    try {
        const newLessonPlan = new LessonPlan({ title, description, createdBy: createdByObjectId }); // 新しいレッスンプランインスタンスを作成
        await newLessonPlan.save(); // データベースに保存
        res.status(201).send('レッスンプランが正常に追加されました'); // 成功メッセージを返す
    } catch (error) {
        console.error('レッスンプラン追加エラー:', error); // エラーログをターミナルに出力
        res.status(400).send(`レッスンプランの追加に失敗しました: ${error.message}`); // エラーメッセージを返す
    }
};

// レッスンプランを取得するコントローラー関数
exports.getAllLessonPlans = async (req, res) => {
    try {
        const lessonPlans = await LessonPlan.find().populate('createdBy', 'username'); // データベースから全てのレッスンプランを取得し、作成者のユーザー名をポピュレート
        res.status(200).json(lessonPlans); // レッスンプランをJSON形式で返す
    } catch (error) {
        console.error('レッスンプラン取得エラー:', error); //エラーログをターミナルに出力
        res.status(500).send('レッスンプランの取得に失敗しました'); //エラーメッセージを返す
    }
};