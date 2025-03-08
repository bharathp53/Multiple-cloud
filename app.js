const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://abc123.cloudfront.net' // Replace with your CloudFront URL
}));
app.use(express.json());

// Sample API Endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Azure Backend!' });
});

// Start Server
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});