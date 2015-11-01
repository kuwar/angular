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
	});
	$routeProvider.when('/about', {
		controller : 'AboutCtrl',
		templateUrl : 'partials/about.html'
	});
	$routeProvider.when('/service', {
		controller : 'ServiceCtrl',
		templateUrl : 'partials/service.html'
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

myApp.controller('AboutCtrl', ['$scope', function($scope){
	$scope.title = "About Page";
	$scope.description = function(){
		return "This is About description";
	};
}]);

myApp.controller('ServiceCtrl', ['$scope', function($scope){
	$scope.title = "Service Page";
	$scope.description = function(){
		return "This is service description";
	};
}]);

myApp.filter('greet', function(){
	return function(name){
		return "Hello" + name + "!";
	};
})