angular.module('secApp', [
		'ui.router'

	])
	.config(function($urlRouterProvider){

		$urlRouterProvider.otherwise('/');
	})