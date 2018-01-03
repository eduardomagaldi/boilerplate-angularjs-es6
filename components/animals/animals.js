import mainHelper from '../main/js/main.helper';
import statesHelper from '../main/js/states.helper';

const name = 'animals',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name;

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
	bindings: {
		animals: '<'
	}
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

		name: 'animals',
		url: '/animals',
		component: 'animals',
		resolve: {
			animals: resolve
		}

	});
}

resolve.$inject = ['animalsDataService'];
function resolve(animalsDataService) {
	return animalsDataService.getAll();
}