const mongoose = require('mongoose');
var schema = mongoose.Schema;

var todoSchema = new schema({
    text: String,
    isDone: Boolean
})

var todos = mongoose.model('todos',todoSchema);

module.exports = todos;