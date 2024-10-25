exports.getCRMData = (req, res) => {
    const leads = [
        { id: 1, name: 'Lead A', email: 'leada@example.com' },
        { id: 2, name: 'Lead B', email: 'leadb@example.com' },
    ];
    res.json(leads);
};

exports.getMarketingData = (req, res) => {
    const campaigns = [
        { campaignId: 'c1', title: 'Campaign 1', leadsGenerated: 150 },
        { campaignId: 'c2', title: 'Campaign 2', leadsGenerated: 75 },
    ];
    res.json(campaigns);
};
