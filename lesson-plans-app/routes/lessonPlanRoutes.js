const express = require('express');
const router = express.Router();
const lessonPlanController = require('../controllers/lessonPlanController'); // コントローラーのインポート

// レッスンプランの追加ルート
router.post('/add', lessonPlanController.addLessonPlan);

// レッスンプランを取得するルート
router.get('/', lessonPlanController.getAllLessonPlans);

module.exports = router;