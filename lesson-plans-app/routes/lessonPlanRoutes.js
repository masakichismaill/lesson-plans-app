const express = require('express');
const router = express.Router();
const LessonPlan = require('../models/lessonPlan');
const mongoose = require('mongoose');

// レッスンプランの追加ルート
router.post('/add', async (req, res) => {
    const { title, description, createdBy } = req.body; // リクエストボディから必要なデータを取得

    // createdBy を ObjectId に変換
    let createdByObjectId;
    try {
        createdByObjectId = mongoose.Types.ObjectId(createdBy);
    } catch (error) {
        return res.status(400).send('Invalid user ID format');
    }

    try {
        const newLessonPlan = new LessonPlan({ title, description, createdBy: createdByObjectId }); // 新しいレッスンプランインスタンスを作成
        await newLessonPlan.save(); // データベースに保存
        res.status(201).send('レッスンプランが正常に追加されました'); // 成功メッセージを返す
    } catch (error) {
        console.error('レッスンプラン追加エラー:', error); // エラーメッセージをコンソールに表示
        res.status(400).send(`レッスンプランの追加に失敗しました: ${error.message}`); // エラーメッセージを返す
    }
});

module.exports = router;