import statesHelper from './states.helper';

module.exports = {
	setComponent: (options) => {
		const dependencies = options.dependencies || ['ui.router'],
			subModule = angular.module(
				options.moduleName,
				dependencies
			);

		angular.module(options.moduleName)
			.component(options.name, {
				template: options.template,
				// controller: options.controller.bind(this),
				controller: options.controller,
				controllerAs: 'vm'
			})

			.config(['$stateProvider', function($stateProvider) {
				statesHelper.setState($stateProvider, {
					name: options.name
				});
			}]);

		return subModule;
	}
};