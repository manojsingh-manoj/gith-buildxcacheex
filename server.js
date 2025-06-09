const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log('Hello, Azure Monitor!');

app.get('/health', (req, res) => {

   res.send("Healthy");

});

app.get('/', (req, res) => {
  res.send('Hello from Node.js');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
