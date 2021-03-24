const { Schema, model } = require('mongoose');

const repetitionSchema = new Schema({
    repetition: {
        type: String,
        required: false
    },
    distance: {
        type: String
    },
    velocity: {
        type: String,
    }
},
    { timestamps: true }
);

module.exports = model('Repetition', repetitionSchema);
