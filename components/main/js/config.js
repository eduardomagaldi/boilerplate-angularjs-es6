import statesHelper from './states.helper';

angular.module('app').config(config);

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
		url: '/',
		template: '<h1>Home</h1>',
		component: undefined
	});

	statesHelper.setState($stateProvider, {
		name: 'lazy',
		lazy: true
	});

	$stateProvider.onInvalid(($to$, $from$) => {
		console.error('onInvalid', $to$, $from$);
	});

	$urlRouterProvider.otherwise('/');
}