const { v4: uuidv4 } = require('uuid');

class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
};

Note.prototype.generateId = function () {
    this.id = uuidv4();
};

const createNewNote = data => {
    const note = new Note(data.title, data.text);
    note.generateId();
    return note;
};

module.exports = createNewNote;