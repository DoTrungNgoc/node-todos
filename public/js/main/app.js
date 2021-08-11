
var app = angular.module("app.todos", ['xeditable']);

app.controller("todoController",['$scope','svTodos', function($scope,svTodos){

    $scope.appName = "Node Dashboard!";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;

    // 
    svTodos.get().then(function(data){
        $scope.todos = data.data;
        $scope.loading = false;
    })

    $scope.createTodo = function() {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        
        svTodos.create(todo).then((data)=>{
            $scope.todos = data.data;
            $scope.formData.text="";
            $scope.loading = false;
        });
        
    };

    $scope.updateTodo = function(todo){
        $scope.loading = true;
        svTodos.update(todo).then((data)=>{
            $scope.todos = data.data;
            $scope.loading = false;
        });
        
    }

    $scope.deleteTodo = function(todo){
        $scope.loading = true;
        svTodos.delete(todo._id).then((data)=>{
            $scope.todos = data.data;
            $scope.loading = false;
        });
    }

}]);