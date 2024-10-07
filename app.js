const express = require("express");
const app = express();
const path = require('path'); 

// Serve home page 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
}); 

// Serve the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Serve the contact-me page
app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// Serve the 404 page for any unknown route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
