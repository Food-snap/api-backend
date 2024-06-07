const express = require('express');
const { updateProfile } = require('../controllers/user');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.put('/edit-profile', authMiddleware, updateProfile);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;