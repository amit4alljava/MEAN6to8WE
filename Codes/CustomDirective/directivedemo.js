var app = angular.module("myapp",[]);
app.directive("myFirstDirective",function(){
    return {
        template:"<b>Hello This is my Custom Directive and this is example</b>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});
app.controller("myctrl",function($scope){
$scope.firstName = "Amit";
    $scope.secondName = "Srivastava";

});

app.directive("nameDirective",function(){
    return {
        template:"<b>Hello {{firstName}} {{secondName}} </b>",
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("elementlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>Test Complete By "+scope.firstName;
        },
        restrict:"E"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("attributelevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
            element[0].innerHTML="<b>this is an Attribute (Mouse enter) level directive";
            });
            element.bind("mouseleave",function(){
                element[0].innerHTML="<b>this is an Attribute (Mouse Leave) level directive";
            });
        },

        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("classlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an class level directive ";
        },
        restrict:"C"  // Element Level, Attribute Level , Class Level
    }
});

app.directive("commentlevel",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>this is an comment level directive";
        },
        restrict:"M"  // Element Level, Attribute Level , Class Level
    }
});