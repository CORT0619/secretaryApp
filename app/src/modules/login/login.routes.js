angular.module('login.routes', ['login.controller'])
	.config(function($stateProvider){
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'src/modules/login/login.html',
				controller: 'loginController'
			});
	});