var app = angular.module("tuts",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

	// to set default child route
	$urlRouterProvider.when('/dashboard','/dashboard/active');
	$urlRouterProvider.otherwise('/home');

	$stateProvider
			.state('home',{
				url : '/home',
				controller : "homeCtrl as home",
				templateUrl : 'templates/home.html'
			}).state('dashboard',{
				url : '/dashboard',
				templateUrl : 'templates/dashboard.html'
			}).state('dashboard.active',{
				url : '/active',
				controller : "activeCtrl as active",
				templateUrl : 'templates/active.html'
			}).state('dashboard.pending',{
				url : '/pending',
				controller : "pendingCtrl as pending",
				templateUrl : 'templates/pending.html'
			}).state('dashboard.summary',{
				url : '/summary',
				controller : "summaryCtrl as summary",
				templateUrl : 'templates/summary.html'
			}).state('contact',{
				url : '/contact',
				controller : "contactCtrl as contact",
				templateUrl : 'templates/contact.html'
			});
});