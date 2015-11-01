var myApp = angular.module( "MyApp", [] );

myApp.constant( "VERSION", "1.1" );

/*myApp.run(["VERSION", "$rootScope", function(VERSION, $rootScope){
	alert($rootScope);
	alert(VERSION);
} ]);*/

// var myApp = angular.module('myApp', []);
myApp.factory('aProvider', function() {
	
   console.log("factory");
});

myApp.directive("test1", function() {
    console.log("directive setup");
    return {
        compile: function() {console.log("directive compile");}
    }
});

myApp.directive("test2", function() {
    return {
        link: function() {console.log("directive link");}
    }
});

myApp.run(function() {
    console.log("app run");
});

myApp.config( function() {
    console.log("app config");
});

myApp.controller('myCtrl', ['$scope', 'aProvider', function($scope, aProvider) {
    console.log("app controller");
}]);

