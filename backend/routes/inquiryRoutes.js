const express = require('express');
const {
  createInquiry,
  getUserInquiries,
  getAllInquiries,
  updateInquiryStatus,
  getPublicInquiries
} = require('../controllers/inquiryController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.get('/public', getPublicInquiries); // Public endpoint - no auth required
router.post('/', protect, createInquiry);
router.get('/', protect, getUserInquiries);
router.get('/all', protect, admin, getAllInquiries);
router.put('/:id', protect, admin, updateInquiryStatus);

module.exports = router;
