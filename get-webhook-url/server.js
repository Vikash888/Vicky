const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Replace with your actual webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/...';

app.get('/get-webhook-url', (req, res) => {
    res.json({ url: DISCORD_WEBHOOK_URL });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
