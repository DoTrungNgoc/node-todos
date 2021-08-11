const configValue = require('./config.json');

var getDBConnectionString = function() {
    return `mongodb+srv://${configValue.username}:${configValue.password}@node-todos.nzzxi.mongodb.net/node-todos?retryWrites=true&w=majority`;
    // return `mongodb+srv://admin:${configValue.password}@nodetest.gwnt9.mongodb.net/node-todos?retryWrites=true&w=majority`;
}


module.exports = {
    getDBConnectionString : getDBConnectionString
}