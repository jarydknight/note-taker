const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const validateNote = require("../../lib/validateNote");
const createNewNote = require("../../lib/createNewNote");
const saveToDb = require("../../lib/saveToDb")

// Route to get notes from db.json
router.get("/notes", (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, "../../db/db.json"), err => {
        if (err) {
            console.log(err)
        }
    });

    res.json(JSON.parse(data));
});

// Route to save new notes to db.json
router.post("/notes", (req, res) => {
    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted")
    }
    else{
        const data = createNewNote(req.body);
        saveToDb(data);
        res.json(data);
    }
})

module.exports = router;