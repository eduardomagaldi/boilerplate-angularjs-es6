import mainHelper from '../main/js/main.helper';
import statesHelper from '../main/js/states.helper';

const name = 'example', //change
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name,
	bindings = {},
	resolve = {};

bindings[name] = '=';
resolve[name] = [
	name + 'DataService',
	'$stateParams',
	function resolve(
		exampleDataService, //change
		$stateParams
	) {
		return exampleDataService.example($stateParams[name]); //change twice
	}
];

require('./' + name + '.styl');

mainHelper.setModule({
	moduleName
});

require('./' + name + '.data.service');

mainHelper.setComponent({
	name,
	template,
	controller,
	moduleName,
	bindings
});

mainHelper.setConfig({
	name,
	moduleName,
	config
});

module.exports = moduleName;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	statesHelper.setState($stateProvider, {
		name,
		url: '/' + name,
		resolve
	});
}
