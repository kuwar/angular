<!DOCTYPE html>
<html data-ng-app="MyDirectives">
<head>

	<title>Custom Directives</title>

	<script type="text/javascript" src="../js/lib/angular/angular.min.js"></script>
	<script type="text/javascript" src="../js/lib/angular/angular-route.min.js"></script>

</head>

<body data-ng-controller="CustomDirectiveCtrl">

	<h1> {{ title }} </h1>

	<div data-ng-repeat="friend in friends">

		<contact-card friend="friend" title="'Contact Title'">
			<h5>Contact Card</h5>
		</contact-card>
	</div>

</body>

<script type="text/javascript" src="APPS/apps.js"></script>
<script type="text/javascript" src="APPS/contact_card_directive.js"></script>

</html>