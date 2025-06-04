const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const DOWNLOAD_CODE = 'SECRET123';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/download', (req, res) => {
  const code = req.body.code;
  if (code === DOWNLOAD_CODE) {
    const filePath = path.join(__dirname, 'files', 'sample.txt');
    return res.download(filePath);
  }
  res.status(401).send('コードが正しくありません');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
