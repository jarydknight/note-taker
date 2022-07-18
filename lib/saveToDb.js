const fs = require("fs");
const path = require("path");

const saveToDb = newNote => {
    let dbData = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8", err => {
        if (err) {
            console.log(err)
        }
    }));

    dbData.push(newNote);
    dbData = JSON.stringify(dbData);

    fs.writeFileSync(path.join(__dirname, "../db/db.json"), dbData, err => {
        if (err) {
            console.log(err);
        };
    });
};

module.exports = saveToDb;