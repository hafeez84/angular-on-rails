var myApp = angular.module('myApp', ['ui.router', 'templates', 'myCtrls', 'ngRoute']);
myApp.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'main/_home.html',
			controller:'Mainctrl'
		})
		.state('test', {
			url: '/test',
			templateUrl: 'main/test.html',
			controller:'Mainctrl'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'main/search.html',
			controller:'Searchctrl'
		})
		.state('details', {
			url: '/details/:itemId',
			templateUrl: 'main/details.html',
			controller:'Detailsctrl'
		});

		// $urlRouterProvider.otherwise('/home');
	}
]);
