const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // コントローラーのインポート

// ユーザー登録ルート
router.post('/register', authController.register); // register関数をコントローラーから呼び出す

module.exports = router;
