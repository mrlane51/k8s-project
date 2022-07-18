const mongoose = require('mongoose');

// user input schema
const inputSchema = mongoose.Schema({
    text: {
        type : String,
        required: [true, 'Please Enter a text value'],
    }
})

// schemas are put in Capalized first letter
module.exports = mongoose.model('Input', inputSchema);