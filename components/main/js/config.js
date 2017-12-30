angular.module('app').config(config);

config.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

function config(
	$stateProvider,
	$urlRouterProvider
) {
	setState($stateProvider, {
		name: 'lazy'
	});



	console.log('$stateProvider', $stateProvider);

	$urlRouterProvider.otherwise('/');
}

function setState($stateProvider, options) {

	// $stateProvider.state({
	// 	name: 'lazy.**',
	// 	url: '/lazy',
	// 	// templateUrl: '../../' + options.name + '/' + options.name + '.html',
	// 	// template: require('../../' + options.name + '/' + options.name + '.html'),
	// 	lazyLoad: function(transition) {
	// 		const $ocLazyLoad = transition.injector().get('$ocLazyLoad');

	// 		// return System.import('../../lazy/lazy.js');

	// 		return System.import('../../lazy/lazy.js')
	// 			.then(mod => {
	// 				console.log('mod', mod);

	// 				$ocLazyLoad.load(mod.subModule);
	// 			});
	// 	}
	// });

	const defaultOptions = {
		url: '/' + options.name,
		lazyLoad: function(transition) {
			const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
			return System.import('../../' + options.name + '/' + options.name + '.js')
				.then(mod => {
					$ocLazyLoad.load(mod.subModule);
				});
		}
	};

	let resultOptions,
		name = options.name;

	if (options.lazy === undefined || options.lazy) {
		name = options.name + '.**';
	}

	resultOptions = {
		...defaultOptions,
		...options,
		name: name
	};

	console.log('resultOptions', resultOptions);

	$stateProvider.state(resultOptions);
}