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

mainHelper.setConfig({
	name,
	moduleName,
	config
});

mainHelper.setComponent({
	name,
	template,
	controller,
	moduleName
});

mainHelper.setComponent({
	name: 'bla',
	template: '<h1>bla</bla>',
	controller: function() {console.log('bla');},
	moduleName
});

// require('../animalsType/animalsType.js');

module.exports = moduleName;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	statesHelper.setState($stateProvider, {
		name: name
	});

	statesHelper.setState($stateProvider, {
		name: name + '.type',
		url: '/{animalType}',
		component: 'bla'
	});
}