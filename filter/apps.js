var myFilterApp = angular.module('FilterApp', []);

// To declare a filter we pass in two parameters to app.filter

// The first parameter is the name of the filter 
// second is a function that will return another function that does the actual work of the filter

// Setup the filter
myFilterApp.filter('ordinal', function() {

  // Create the return function
  // set the required parameter name to **number**
  return function(number) {

    // Ensure that the passed in data is a number
    if(isNaN(number) || number < 1) {

      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return number;

    } else {

      // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.

      var lastDigit = number % 10;

      if(lastDigit === 1) {
        return number + 'st'
      } else if(lastDigit === 2) {
        return number + 'nd'
      } else if (lastDigit === 3) {
        return number + 'rd'
      } else if (lastDigit > 3) {
        return number + 'th'
      }

    }
  }

});

myFilterApp.controller('FilterController', ['$scope', function($scope){
	$scope.title = "Custom Filter."
}]);

myFilterApp.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
});

myFilterApp.controller('MyController', ['$scope', function($scope) {
  $scope.greeting = 'hello';
}]);

myFilterApp.filter('capitalize', function() {

  // Create the return function and set the required parameter as well as an optional paramater
  return function(input, char) {

    if (isNaN(input)) {

      // If the input data is not a number, perform the operations to capitalize the correct letter.
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];

      for (var i = 0; i < input.length; i++) {

        if (i == char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
        
      }

      return out.join('');

    } else {
      return input;
    }
  }
});

// Setup the filter
myFilterApp.filter('customCurrency', function() { 

  // Create the return function and set the required parameter name to **input**
  // setup optional parameters for the currency symbol and location (left or right of the amount)
  return function(input, symbol, place) {

    // Ensure that we are working with a number
    if(isNaN(input)) {
      return input;
    } else {

      // Check if optional parameters are passed, if not, use the defaults
      var symbol = symbol || '$';
      var place = place === undefined ? true : place;

      // Perform the operation to set the symbol in the right location
      if( place === true) {
        return symbol + input;
      } else {
        return input + symbol;
      }

    }
  }

});