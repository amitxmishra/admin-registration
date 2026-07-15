const express = require('express');
const router = express.Router();
const { signup, login, getAllUsers } = require('../controllers/userController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/admin/users', verifyToken, verifyAdmin, getAllUsers);

module.exports = router;