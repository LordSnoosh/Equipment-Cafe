const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model('Equipment', equipmentSchema);