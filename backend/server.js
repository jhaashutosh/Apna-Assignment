const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/globe-data', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'extracted_data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Failed to read data' });
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});