const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const { generateCSV, generatePDF } = require('../utils/reportUtils');

exports.getReport = async (req, res) => {
    const format = req.query.format || 'csv';

    try {
        const leads = await Lead.find();
        const campaigns = await Campaign.find();

        if (format === 'pdf') {
            const pdfBuffer = await generatePDF(leads, campaigns);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
            res.send(pdfBuffer);
        } else {
            const csvData = generateCSV(leads, campaigns);
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename=report.csv');
            res.send(csvData);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error generating report', error });
    }
};
