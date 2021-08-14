const express = require('express')
const router = express.Router();

var path = require('path');

//routes to tehe index and notes page - i do not prefer using wildcard for routing 
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/../public/notes.html')));

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')));
 
module.exports = router;