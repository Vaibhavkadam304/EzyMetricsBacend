# EzyMetrics Backend

## Description
This is a backend server for EzyMetrics, built using Node.js with data integrations and reporting.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
# EzyMetrics Backend

Welcome to the EzyMetrics backend! 🚀

This is a Node.js and Express-powered service designed to help you fetch and analyze data from dummy CRM and marketing platforms. Whether you're looking to generate insightful reports or simply explore data integrations, this project has got you covered!

## What Does It Do?

EzyMetrics provides a straightforward way to:

- **Integrate with Dummy Platforms**: Fetch lead and campaign data effortlessly from simulated CRM and marketing services.
- **Data Storage and ETL Processing**: Store your data using MongoDB and transform it into meaningful metrics with our built-in ETL processes.
- **Generate Reports**: Easily create reports in PDF or CSV formats and receive alerts via email when certain conditions are met.

## Getting Started

Ready to dive in? Here’s how to set everything up on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (either locally or a cloud instance)

### Installation Steps

1. **Clone the Repository**:

   Open your terminal and run:

   ```bash
   git clone https://github.com/yourusername/ezyMetrics.git
   cd ezyMetrics/enzybackend
Install Dependencies:

Run this command to install all required packages:

bash
npm install
Set Up Environment Variables:

Create a .env file in the root of your project and add your MongoDB connection string:

makefile

MONGODB_URI=your_mongodb_connection_string
Running the App
Start your server with:

bash
node src/app.js
Your backend service should now be up and running at http://localhost:5000.

API Endpoints
Here are the main endpoints you can use:

1. Generate Reports
GET /api/report?format=csv

What it does: This endpoint fetches leads and campaigns and generates a report in CSV format.
Response: You’ll receive a CSV file with all the lead data.
GET /api/report

What it does: This one returns the lead and campaign data in JSON format.
Response: A neat JSON object containing all the info you need.
How to Test It Out
To generate a CSV report, just open your browser (or Postman) and navigate to:

bash
http://localhost:5000/api/report?format=csv
