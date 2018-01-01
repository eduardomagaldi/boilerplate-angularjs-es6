module.exports = {
	setState: ($stateProvider, stateOptions) => {
		var defaultOptions = {
				url: '/' + stateOptions.name
			},
			resultOptions,
			// name;

			stateName = stateOptions.name;

		if (stateOptions.lazy) {
			stateName += '.**';
			defaultOptions.lazyLoad = lazyLoad;
		} else {
			defaultOptions.component = stateOptions.name;
		}

		resultOptions = {
			...defaultOptions,
			...stateOptions,
			name: stateName
		};

		// resultOptions.name = stateName;

		$stateProvider.state(resultOptions);

		lazyLoad.$inject = ['transition'];
		function lazyLoad(transition) {
			const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
			return System.import('../../' + stateOptions.name + '/' + stateOptions.name + '.js')
				.then(moduleName => {
					console.log('$ocLazyLoad.load:', moduleName);
					$ocLazyLoad.load(angular.module(moduleName));
				});
		}
	}
}