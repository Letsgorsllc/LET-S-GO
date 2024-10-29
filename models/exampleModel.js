// Example Model
const mongoose = require('mongoose');
const exampleSchema = new mongoose.Schema({
    name: String,
    value: Number
});
module.exports = mongoose.model('Example', exampleSchema);
