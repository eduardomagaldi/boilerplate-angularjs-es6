module.exports = {
	setState: ($stateProvider, options) => {
		let defaultOptions = {
				url: '/' + options.name
			},
			resultOptions,
			name = options.name;

		if (options.lazy) {
			name = options.name + '.**';
			defaultOptions.lazyLoad = lazyLoad;
		} else {
			defaultOptions.component = options.name;
		}

		$stateProvider.state({
			...defaultOptions,
			...options,
			name: name
		});

		lazyLoad.$inject = ['transition'];
		function lazyLoad(transition) {
			const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
			return System.import('../../' + options.name + '/' + options.name + '.js')
				.then(mod => {
					console.log('$ocLazyLoad.load:', mod);

					$ocLazyLoad.load(mod);
				});
		}
	}
}