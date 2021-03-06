<!DOCTYPE html>
<html ng-app="app">
<head>
	<title></title>
	<script type="text/javascript" src="../js/lib/angular/angular.min.js" ></script>
</head>
<body>

<div ng-controller="ContactController">
    <form>
	    <label>Name</label>
	        <input type="text" name="name" ng-model="newcontact.name"/>
	    <label>Email</label>
	        <input type="text" name="email" ng-model="newcontact.email"/>
	    <label>Phone</label>
	        <input type="text" name="phone" ng-model="newcontact.phone"/>
	        <br/>
	        <input type="hidden" ng-model="newcontact.id" />
	     <input type="button" value="Save" ng-click="saveContact()" />
    </form>

	<table>
		<thead>
		<tr>
		    <th>Name</th>
		    <th>Email</th>
		    <th>Phone</th>
		    <th>Action</th>
		</tr>
		</thead>

		<tbody>
		<tr ng-repeat="contact in contacts">
		    <td>{{ contact.name }}</td>
		    <td>{{ contact.email }}</td>
		    <td>{{ contact.phone }}</td>
		    <td>
		        <a  href="#" ng-click="edit(contact.id)">edit</a> |
		        <a href="#" ng-click="delete(contact.id)">delete</a>
		    </td>
		 </tr>
		</tbody>
	</table>   
</div>

</body>
<script type="text/javascript" src="apps.js"></script>
</html>