import statesHelper from './states.helper';

module.exports = {
	setComponent: (options) => {
		let subModule = angular.module(
			options.moduleName,
			[
				'ui.router'
			]
		);

		angular.module(options.moduleName)
			.component(options.name, {
				template: options.template,
				controller: options.controller
			})

			.config(['$stateProvider', function($stateProvider) {
				statesHelper.setState($stateProvider, {
					name: options.name
				});
			}]);

		return subModule;
	}
}