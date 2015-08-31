<!DOCTYPE html>
<html data-ng-app="myapp">
<head>

	<title>Custom Directives</title>

	<script type="text/javascript" src="../../js/lib/angular/angular.min.js"></script>
	<script type="text/javascript" src="../../js/lib/angular/angular-route.min.js"></script>

</head>

<body ng-controller="MainCtrl">
	<input type="text" ng-model="color" placeholder="Enter a color" />
	<hello-world/>
</body>

<script type="text/javascript" src="apps.js"></script>

</html>