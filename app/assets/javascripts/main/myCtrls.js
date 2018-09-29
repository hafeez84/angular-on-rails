var myCtrls = angular.module('myCtrls',['ngRoute']);

myCtrls.controller("Mainctrl", function ($scope, $http) {
	$scope.msg = "hi from controller !!";
	$http.get('http://localhost:3000/users.json').then(function (res) {
		// body...
		$scope.users = res.data;
	});
} );

myCtrls.controller('Searchctrl',function ($scope, $http) {
	$http.get('http://localhost:3000/users.json').then(function (res) {
	$scope.artists = res.data;
	$scope.artistOrder = 'name';
	});
});

myCtrls.controller('Detailsctrl', 
	function($scope, $http, $routeParams){
		$http.get('http://localhost:3000/users.json').then(function(response) {
	    $scope.artists = response.data;
	    $scope.whichItem = $routeParams.itemId;

	    if ($routeParams.itemId > 0) {
	      $scope.prevItem = Number($routeParams.itemId) - 1;
	    } else {
	      $scope.prevItem = $scope.artists.length - 1;
	    }

	    if ($routeParams.itemId < $scope.artists.length-1) {
	      $scope.nextItem = Number($routeParams.itemId) + 1;
	    } else {
	      $scope.nextItem = 0;
	    }

	});
});