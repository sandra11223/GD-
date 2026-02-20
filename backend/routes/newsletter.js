const express = require('express');
const router = express.Router();
const { subscribe, getAllSubscribers, unsubscribe, deleteSubscriber } = require('../controllers/newsletterController');
const { protect, admin } = require('../middleware/auth');

// Public routes
router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);

// Protected routes (all authenticated users can view)
router.get('/', protect, getAllSubscribers);

// Admin only routes
router.delete('/:id', protect, admin, deleteSubscriber);

module.exports = router;
