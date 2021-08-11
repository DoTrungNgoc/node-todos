
const todos = require('../models/todoModel');

function getTodos(res) {
    
    todos.find(function(err,todo) {
        
        if (err) {
            res.status(500).json(err);
        }
        else{
            res.json(todo);
        }
    })
}

module.exports = function (app) {
    
    app.get("/api/todos", function (req, res) {

        getTodos(res);
    });

    app.get("/api/todo/:id",function (req, res) {

        todos.findById({_id: req.params.id},function(err,todo){
            
            if (err)
                throw err;
            else
                res.json(todo);
        })
    });

    app.post("/api/todo", function (req, res){

        var todo = {
            text: req.body.text,
            isDone: req.body.isDone,
        };

        todos.create(todo, function (err,todo){
            
            if (err)
                throw err;
            else
                getTodos(res);
        })
    });

    app.put('/api/todo', function (req, res){

        if (!req.body._id)
            return res.status(500).send("Id is required");
        else{
            todos.updateOne({_id: req.body._id},
                {
                    text: req.body.text,
                    isDone: req.body.isDone
                },
                function(err,todo) {
                    
                    if (err)
                        return res.status(500).json(err);
                    else
                        getTodos(res);
                })
        }
    });

    app.delete('/api/todo/:id',function(req, res){

        todos.deleteOne({id:req.params._id},(err,todo)=>{
            
            if (err)    
                return res.status(500).json(err);
            else
                getTodos(res);
        })
    });
}