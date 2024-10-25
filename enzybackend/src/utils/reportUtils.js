const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');

exports.generateCSV = (leads, campaigns) => {
    const data = [...leads, ...campaigns];
    const json2csvParser = new Parser();
    return json2csvParser.parse(data);
};

exports.generatePDF = (leads, campaigns) => {
    const doc = new PDFDocument();
    let buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
        return Buffer.concat(buffers);
    });

    doc.text('EzyMetrics Report', { align: 'center' });
    doc.text('Leads Data:');
    leads.forEach(lead => doc.text(JSON.stringify(lead)));

    doc.text('\nCampaigns Data:');
    campaigns.forEach(campaign => doc.text(JSON.stringify(campaign)));

    doc.end();
};
