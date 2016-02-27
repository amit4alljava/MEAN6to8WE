var app = angular.module("taskApp",[]);
app.factory("TaskFactory",function(){
    return {"caller":function(){
       return ["Task1","Task2","Task3"];
    }};
})
app.controller("taskController",function($scope,TaskFactory){
    $scope.addTask=function(){
        $scope.msg="Your Task "+$scope.taskName+" And Desc "+$scope.taskDesc;
        $scope.tasks =TaskFactory.caller();
      /*alert("Task Name "+$scope.taskName+
      " Desc "+$scope.taskDesc);*/
    };
});
app.controller("ctrl2",function($scope){
    $scope.age = 21;
});

