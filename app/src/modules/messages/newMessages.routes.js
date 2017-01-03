angular.module('newMesssages.routes', ['newMessages.controller'])
	.config(function($stateProvider){

		$stateProvider
			.state('newMessages', {
				url: '/newmsgs',
				templateUrl: 'src/modules/messages/newMsgs.html',
				controller: 'newMessagesController'
			})

	});