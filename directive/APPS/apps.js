var myDirectives = angular.module( "MyDirectives", [
	'ngRoute',
	'app.directives.contactCard'
] );

myDirectives.controller('CustomDirectiveCtrl', ['$scope', function($scope){
	$scope.title = "Actually learning Custom directive in angular js";

	$scope.friends = [
		{
			id: 1,
			firstName: "Saurav",
			lastName: "Kuwar"
		},
		{
			id: 2,
			firstName: "Diwash",
			lastName: "Kuwar"
		}
	];
}])