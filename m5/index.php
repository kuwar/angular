<!DOCTYPE html>
<html ng-app="MyApp">
<head>
	<title></title>
	<script type="text/javascript" src="../js/lib/angular/angular.min.js"></script>
</head>
<body>

<div ng-controller="ListCtrl">
	<a href="#" ng-repeat="user in users track by user.id" ng-click="selectUser(user)">{{ user.first_name }}  </a>
</div>

<div ng-controller="DetailCtrl">
	<div ng-if="!currentUser">
		You have not selected user.
	</div>
	<div ng-if="currentUser">
		<p>{{ currentUser.first_name }}</p>
		<p>{{ currentUser.email }}</p>
	</div>
</div>

</body>
<script type="text/javascript" src="apps.js"></script>
</html>