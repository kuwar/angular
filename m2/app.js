var myApp = angular.module( "MyApp", [] );

myApp.constant( "VERSION", "1.1" );

myApp.run(["VERSION", "$rootScope", function(VERSION, $rootScope){
	alert($rootScope);
	alert(VERSION);
} ]);