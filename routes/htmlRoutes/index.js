const router = require("express").Router();
const path = require("path");

// Route to get to index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Route to get to notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// Route to handle any other input. Will serve index.html to client
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;