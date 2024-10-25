const express = require('express');
const { getCRMData, getMarketingData } = require('../services/dataService');
const { getReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/crm-data', getCRMData);
router.get('/marketing-data', getMarketingData);
router.get('/report', getReport);

module.exports = router;
