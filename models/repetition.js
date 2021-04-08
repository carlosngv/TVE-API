const { Schema, model } = require('mongoose');

const repetitionSchema = new Schema({
    repetition: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = model('Repetition', repetitionSchema);
