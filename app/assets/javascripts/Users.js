var myApp = angular.module('myApp', ['ui.router', 'templates', 'myCtrls']);
myApp.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'main/_home.html',
				controller:'Mainctrl'
			})
			.state('rails', {
				url: '/rails',
				templateUrl: 'main/_rails.html',
				controller:'Mainctrl'
			})
			.state('test', {
				url: '/test',
				templateUrl: 'main/test.html',
				controller:'Mainctrl'
			})
			.state('root', {
				url: '/',
				templateUrl: 'main/search.html',
				controller:'Searchctrl'
			})
			.state('details', {
				url: '/details/:itemId',
				templateUrl: 'main/details.html',
				controller:'Detailsctrl'
			});

			$urlRouterProvider.otherwise('/home');
		}]);
