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

	$urlRouterProvider.otherwise('/');
}

function setState($stateProvider, options) {
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

	$stateProvider.state(resultOptions);
}