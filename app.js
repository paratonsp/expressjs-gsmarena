const express = require('express');
const gsmarena = require('gsmarena-api');
const app = express();

app.get('/', (req, res) => {
    res.send('API for GSM Arena');
});

app.get('/top', async (req, res) => {
    const top = await gsmarena.top.get();
    res.send(top);
});

app.get('/search', async (req, res) => {
    const q = req.query.q;
    const devices = await gsmarena.search.search(q);
    res.send(devices);
});

app.get('/device', async (req, res) => {
    const id = req.query.id;
    const device = await gsmarena.catalog.getDevice(id);
    res.send(device);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});