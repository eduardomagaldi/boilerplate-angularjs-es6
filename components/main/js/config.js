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
		name: 'page404',
		url: '/404-not-found'
	});

	$stateProvider.onInvalid(($to$, $from$) => {
		console.error('onInvalid', $to$, $from$); // eslint-disable-line no-console
	});

	$urlRouterProvider.when('', '/');

	$urlRouterProvider.otherwise('/404-not-found');
}