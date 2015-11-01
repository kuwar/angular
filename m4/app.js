var myApp = angular.module( "MyApp", [] );

myApp.controller( "RepeatController", ['$scope', function($scope){
	$scope.setColor = function(){
		$scope.values = ['red', 'blue', 'green', 'yellow'];
	};

	$scope.setState = function(){
		$scope.values = ['np', 'ca', 'us', 'in'];
	};

	$scope.getValues = function(){
		return $scope.values;
	};

}] );

myApp.controller( "FormCtrl", ['$scope', function($scope){
	$scope.generateAges = function(){
		var ages = [];
		for ( var i = 0; i < 40; i++ ){
			ages.push(i);
		}
		return ages;
	};

	$scope.generateMonth = function(){
		var month = [];
		for ( var i = 1; i < 13; i++ ){
			month.push(i);
		}
		return month;
	};

	$scope.submit = function(){

		if ( $scope.myForm.$valid ) {
			alert("submited");
		}
		else {
			alert('Error');
		}
	};
}] );