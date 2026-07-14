const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const result = 2 + 2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});