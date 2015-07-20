var myApp = angular.module( "MyApp", [] );

myApp.factory("userServices", function(){
	var user;
	return {
		setUser : function(current){
			user = current;
		},
		getUser : function(){
			return user;
		}
	};
});

myApp.controller("ListCtrl", ['$scope', '$rootScope', '$http', 'userServices', function($scope, $rootScope, $http, userServices){
	$http.get('users.json').success(function(users){
		$scope.users = users;
	});

	$scope.selectUser = function(user){
		userServices.setUser(user);
		$rootScope.$broadcast('userChanged');
	};
}]);

myApp.controller("DetailCtrl", ['$scope', 'userServices', function($scope, userServices){
	$scope.$on('userChanged', function(event){
		$scope.currentUser = userServices.getUser();
	});
}]);
