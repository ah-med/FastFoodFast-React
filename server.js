import express from 'express';
import path from 'path';

const port = process.env.PORT || 8081;

const app = express();

app.use(express.static(path.join(__dirname)));
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
