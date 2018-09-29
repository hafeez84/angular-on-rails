var myCtrls = angular.module('myCtrls',[]);

myCtrls.controller("Mainctrl", function ($scope, $http) {
	$scope.msg = "hi from controller !!";
	$http.get('http://localhost:3000/users.json').then(function (res) {
		// body...
		$scope.users = res.data;
	})
} );

myCtrls.controller('SearchCtrl',function ($scope, $resource, $http) {
	
})