angular.module('secApp', [
		'ui.router',
		'login.controller',
		'login.routes',

		'newMessages.controller',
		'newMesssages.routes'

	])
	.config(function($urlRouterProvider){

		$urlRouterProvider.otherwise('/');
	})