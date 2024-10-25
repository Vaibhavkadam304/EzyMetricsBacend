const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const { getCRMData, getMarketingData } = require('./dataService');

exports.runETLProcess = async () => {
    try {
       
        const crmData = await getCRMData();
        const marketingData = await getMarketingData();

      
        const transformedLeads = crmData.map(lead => ({
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            createdAt: new Date(),
        }));

        const transformedCampaigns = marketingData.map(campaign => ({
            title: campaign.title,
            leadsGenerated: campaign.leadsGenerated,
            startDate: new Date(),
            endDate: new Date(),
        }));

       
        await Lead.insertMany(transformedLeads);
        await Campaign.insertMany(transformedCampaigns);

        console.log("ETL process completed successfully");
    } catch (error) {
        console.error("Error running ETL process:", error);
    }
};
