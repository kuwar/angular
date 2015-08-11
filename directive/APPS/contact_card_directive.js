var contactDirective = angular.module('app.directives.contactCard', []);

contactDirective.directive('contactCard', function(){
	return {
		restrict: 'E',
		scope: {
			friend: '=',
			title: '='
		},
		replace: true,
		// template: "<h1>{{ friend.firstName }}</h1>",
		templateUrl: 'APPS/templates/contacts_directives.php',
		transclude: true,
		link: function(scope, element, attribute){
			// console.log(arguments);
		},
		controller: function($scope, $interval){
			console.log($scope.friend);
			// $interval(function(){
			// 	console.log("interval");
			// }, 1000
			// );
		}
	};
});