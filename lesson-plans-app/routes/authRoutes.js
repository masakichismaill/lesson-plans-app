const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // コントローラーのインポート

// ユーザー登録ルート
router.post('/register', authController.register); // 登録用ルート
// ユーザーログインルート
router.post('/login', authController.login); //ログイン用ルート
// ユーザーログアウトルート
router.post('/logout', authController.logout); //ログアウト用ルート
module.exports = router;
