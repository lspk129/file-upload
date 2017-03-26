const express = require('express');
const path = require('path');

// multer setup with memory storage
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// server setup
const app = express();
const PORT = process.env.PORT || 3000;

// prettify json response
app.set('json spaces', 2);

// home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// upload page with result
app.post('/upload', upload.single('userFile'), (req, res, next) => {
  res.json({ 'file size in bytes': req.file.size });
});

app.listen(PORT, () => console.log(`Connected to port: ${PORT}`));
