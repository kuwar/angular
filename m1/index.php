<!DOCTYPE html>
<html ng-app>
<head>
	<title>Hello Angular</title>

	<script type="text/javascript" src="../js/lib/angular/angular.min.js"></script>

</head>
<body>

<input type="text" ng-model="q" />
<div class="content" ng-init="title='Hello Angular'; items=[1,2,3,4,5]">
	Title : {{ title }}
	<ul ng-hide="hide">
		<li ng-repeat="item in items | filter:q ">{{ item }}</li>
	</ul>
</div>

<button ng-click="hide = !hide">Toggle Show/Hide</button>
<button ng-click="items[items.length] = items.length">Add new items</button>

</body>

</html>