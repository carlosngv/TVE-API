const { Schema, model } = require('mongoose');

const velocitySchema = new Schema({
    velocity: {
        type: String,
        required: false
    },
    username: {
        type: String,
    }
},
    { timestamps: true }
);

module.exports = model('Velocity', velocitySchema);
