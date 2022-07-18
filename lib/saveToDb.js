const fs = require("fs");
const path = require("path");

// Function to save new note to db.JSON
const saveToDb = newNote => {
    // read contents of db.json. Use JSON.parse to parse it from text to an object (an array in this case)
    let dbData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8", err => {
        if (err) {
            console.log(err)
        }
    }));

    // New note is pushed to array then JSON.stringify used to convert back into string in order to write it to the db.json file
    dbData.push(newNote);
    dbData = JSON.stringify(dbData);

    // write to the db.json file
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), dbData, err => {
        if (err) {
            console.log(err);
        };
    });
};

module.exports = saveToDb;