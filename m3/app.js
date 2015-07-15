var myApp = angular.module( "MyApp", ['ngRoute'] );

myApp.constant( "VERSION", "1.1" );

myApp.config( ['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		controller : "HomeCtrl",
		templateUrl : "partials/home.html"
	});
	$routeProvider.when('/info', {
		controller : "InfoController",
		templateUrl : "partials/info.html"
	})
}] );

myApp.controller( "HomeCtrl", ['$scope', function($scope){
	$scope.title = "Wel come to home";
	$scope.description = function(){
		return "This is description.";
	};
}
] );

myApp.controller( "InfoController", ['$scope', function($scope){
	$scope.title = "Info Page";
	$scope.description = function(){
		return "This is info description.";
	};
}
] );