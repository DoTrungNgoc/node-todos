var todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){

        var seedTodos = [
            {
                text: "Hoc Node js",
                isDone: false
            },
            {
                text: "Hoc Angular",
                isDone: false
            }
        ];

    
        todos.create(seedTodos,function(err,result){
            if (err) 
                throw err;
            res.send(result);
           
        });


    });

}
