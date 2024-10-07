## Basic Express app

Create a package.json: 
npm init -y 

Install Express dependency: 
npm install express 

Create app.js file with 
```
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
```

Run: 
node app.js 

http://localhost:3000/ 

Run (and automatically watch for changes):
node --watch app.js 


