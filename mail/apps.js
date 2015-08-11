var app = angular.module('app', [
   'ngRoute'
]);



app.config(function($routeProvider){
	$routeProvider
		.when('/inbox', function(){
			templateUrl: 'views/inbox.html',
			controller: 'InboxCtrl',
			controllerAs: 'inbox'
		})
		.when('/inbox/email/:id', function(){
			templateUrl: 'views/email.html',
			controller: 'EmailCtrl',
			controllerAs: 'email'
		})
		.otherwise({
			redirectTo: '/inbox'
		});
});



app.factory('InboxFactory', function InboxFactory ($http) {
   var exports = {};

   exports.getMessages = function () {
      return $http.get('json/emails.json')
         .error(function (data) {
            console.log('There was an error!', data);
      });
   };

   return exports;
});


app.controller('InboxCtrl', function($scope, InboxFactory) {
   InboxFactory.getMessages()
      .success(function(jsonData, statusCode) {
         console.log('The request was successful!', statusCode, jsonData);
         // Now add the Email messages to the controller's scope
         $scope.emails = jsonData;
   });
});

