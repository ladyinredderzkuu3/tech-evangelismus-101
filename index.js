const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root URL that serves the index.html file
app.get('/', (req, res) => {
  // Use sendFile to send the index.html file located in the public directory
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});