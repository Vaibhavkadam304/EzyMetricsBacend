const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    title: String,
    leadsGenerated: Number,
    startDate: Date,
    endDate: Date,
});

module.exports = mongoose.model('Campaign', CampaignSchema);
