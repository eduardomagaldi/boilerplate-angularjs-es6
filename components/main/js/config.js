import statesHelper from './states.helper';

angular.module('app').config(config);

///////////////

config.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

function config(
	$stateProvider,
	$urlRouterProvider
) {
	statesHelper.setState($stateProvider, {
		name: 'home',
		url: '/'
	});

	statesHelper.setState($stateProvider, {
		name: 'lazy',
		lazy: true
	});

	statesHelper.setState($stateProvider, {
		name: 'animals',
		lazy: true
	});

	statesHelper.setState($stateProvider, {
		name: 'page404',
		url: '/404-not-found'
	});


	// var contacts = {
	// 		name: 'contacts',  //mandatory
	// 		template: 'contacts.html',
	// 		url: '/contacts'
	// }
	// var contactsList = {
	// 		name: 'list', //mandatory. This counter-intuitive requirement addressed in issue #368
	// 		parent: 'contacts',  //mandatory
	// 		template: 'contacts.list.html',
	// 		url: '/list'
	// }

	// $stateProvider
	// 	.state(contacts)
	// 	.state(contactsList)




	$stateProvider
	    .state('settings', {
	        url: '/settings',
	        template: 'templates/settings.html'
	    })
	    .state('settings.profile', {
	        url: '/profile',
	        template: 'templates/profile.html'
	    })
	    .state('settings.account', {
	        url: '/account',
	        template: 'templates/account.html'
	    });




	$stateProvider.onInvalid(($to$, $from$) => {
		console.error('onInvalid', $to$, $from$); // eslint-disable-line no-console
	});

	$urlRouterProvider.when('', '/');

	$urlRouterProvider.otherwise('/404-not-found');
}