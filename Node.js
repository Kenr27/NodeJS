const express = require('express');
const app = express();

// Define your data
const subjectCode = "ITE314";
const examDetails = "P2";

// Routes
app.get('/subject', (req, res) => {
  res.send(subjectCode.toUpperCase());
});

app.get('/exam', (req, res) => {
  res.send(examDetails);
});

app.get('/node', (req, res) => {
  res.send("NODEJS");
});

app.get('/mydata', (req, res) => {
  const data = {
    subject: subjectCode.toUpperCase(),
    exam: examDetails,
    node: "NODEJS"
  };
  res.json(data);
});

// Start the server
const port = process.env.PORT || 3000; // Use the port provided by Render or 3000 for local development
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});