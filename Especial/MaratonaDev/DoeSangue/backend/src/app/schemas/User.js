const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    blood: {
        type: String,
        required: true,
    }
});

export default mongoose.model('User', schema);
