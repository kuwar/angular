<!DOCTYPE html>
<html ng-app="MyApp">
<head>
	<title></title>
	<script type="text/javascript" src="../js/lib/angular/angular.min.js" ></script>
	<script type="text/javascript" src="../js/lib/angular/angular-route.min.js" ></script>
</head>
<body>
	<hr>
	<a href="#/">Home </a> | 
	<a href="#/info">Info </a> | 
	<a href="#/about">About </a> | 
	<a href="#/service">Service </a> | 
	<hr>

	<div ng-view></div>

	<hr>
	<div>
		{{'World' | greet}}
	</div>

</body>
<script type="text/javascript" src="app.js"></script>
</html>