import 'angular';
import '@uirouter/angularjs';
import 'oclazyload';

// Here's a skeleton app.  Fork this plunk, or create your own from scratch.
var app = angular.module('demonstrateissue', ['ui.router', 'oc.lazyLoad']);

// Empty config block.  Define your example states here.
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home')

	$stateProvider.state({
		name: 'home',
		url: '/home',
		component: 'home',
		resolve: { homeData: () => 'HOME DATA' }
	});

	$stateProvider.state({
		name: 'home.child',
		url: '/child',
		component: 'child',
		resolve: { childData: () => 'CHILD DATA' }
	});

	$stateProvider.state({
		name: 'lazy.**',
		url: '/lazy',
		lazyLoad: (transition) =>
				transition.injector().get('$ocLazyLoad').load('_lazyModule.js')
		// lazyLoad: function(transition) {
		// 	const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
		// 	return import('../../lazy/lazy.js')
		// 		.then(mod => {
		// 			$ocLazyLoad.load(mod.appFutureModule);
		// 		});
		// }
	});
});

app.component('home', {
	bindings: { homeData: '<' },
	controller: function() { },
	template: `
	<h1>home state loaded: {{ $ctrl.homeData }}</h1>
	<div ui-view></div>
`});

app.component('child', {
	bindings: { childData: '<' },
	controller: function($scope) { },
	template: `
	<h1>child state loaded: {{ $ctrl.childData }}</h1>
	<div ui-view></div>
`});


console.log("Scripts loading... ");

app.run(($rootScope, $state, $location) => Object.assign($rootScope, { $state, $location }));
