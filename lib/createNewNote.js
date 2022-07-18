const { v4: uuidv4 } = require('uuid');

// Note class used to make new notes
class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
};

// Class method for Note class to generate new unique ID
Note.prototype.generateId = function () {
    this.id = uuidv4();
};

// Function to create new Note
const createNewNote = data => {
    const note = new Note(data.title, data.text);
    note.generateId();
    return note;
};

module.exports = createNewNote;