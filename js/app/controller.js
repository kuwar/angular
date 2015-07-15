
var listController = angular.module( "listController", [] );

listController.controller("ListController", ['$scope', '$http', function($scope, $http){
	$http.get('js/app/data/data.json').success(function(data){
		$scope.author = data;
		$scope.authorOrderBy = "name";
	});
}]);