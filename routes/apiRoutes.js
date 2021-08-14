const express = require('express')
const router = express.Router();
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

//load the existing notes form db.json file 
router.get("/api/notes", (req, res) =>{
         const data= JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
         res.json(data);
})

//api.post

router.post("/api/notes", (req, res) =>{
          //get notes from the app
         const newNote = req.body;
         // assign new ID to the note using uuid 
         newNote.id = uuidv4();
         //append to db.json file
         const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
         data.push(newNote);
         //write new data to file       
         fs.writeFileSync('./db/db.json', JSON.stringify(data));
         console.log("\nSuccessfully added new note to 'db.json' file!");
         // Send response
         res.json(data);
})

//api delete notes 
router.delete("/api/notes/:id", (req, res) =>{
         //gets the params from url when user click on the delet button 
         const noteId = req.params.id;
         //read file
         const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
         //filter data according to the user selection 
         const newData = data.filter( note => note.id !== noteId);
         //write new data to the file 
         fs.writeFileSync("./db/db.json", JSON.stringify(newData));
         console.log("\nSuccessfully deleted the selected note from 'db.json' file!");
         // Send response
         res.json(newData);
});

module.exports = router;