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
		name: 'home',
		url: '/',
		template: '<h1>Home</h1>',
		lazy: false
	});

	setState($stateProvider, {
		name: 'lazy'
	});

	$stateProvider.onInvalid(($to$, $from$) => {
		console.error('onInvalid', $to$, $from$);
	});

	$urlRouterProvider.otherwise('/');
}


















function setState($stateProvider, options) {
	let defaultOptions = {
			url: '/' + options.name,
			// lazyLoad: lazyLoad
		},
		resultOptions,
		name = options.name;

	if (options.lazy === undefined || options.lazy) {
		name = options.name + '.**';
		defaultOptions.lazyLoad = lazyLoad;
	}

	resultOptions = {
		...defaultOptions,
		...options,
		name: name
	};

	console.log('resultOptions', resultOptions);

	$stateProvider.state(resultOptions);

	lazyLoad.$inject = ['transition'];
	function lazyLoad(transition) {
		const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
		return System.import('../../' + options.name + '/' + options.name + '.js')
			.then(mod => {
				$ocLazyLoad.load(mod.subModule);
			});
	}
}

