import statesHelper from './states.helper';

module.exports = {
	setModule: (options) => {
		const dependencies = options.dependencies || ['ui.router'];

		angular.module(
			options.moduleName,
			dependencies
		);
	},

	setComponent: (options) => {
		angular.module(options.moduleName)
			.component(options.name, {
				template: options.template,
				controller: options.controller,
				controllerAs: 'vm'
			});
	},

	setConfig: (options) => {
		const configFunction = options.config || config;

		angular.module(options.moduleName)
			.config(configFunction);

		config.$inject = ['$stateProvider'];
		function config($stateProvider) {
			console.log('default config');
			statesHelper.setState($stateProvider, {
				name: options.name
			});
		}
	}
};