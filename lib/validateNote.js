// Function to validate note input from user PUT request
const validateNote = data => {
    if (!data.title || typeof data.title !== 'string' || !data.text || typeof data.text !== 'string') {
        return false;
    }
    else {
        return true;
    }
};

module.exports = validateNote