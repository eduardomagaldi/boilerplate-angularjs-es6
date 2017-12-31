import componentsHelper from '../main/js/components.helper';

const name = 'lazy',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name;

require('./' + name + '.styl');

module.exports = componentsHelper.setComponent({name, template, controller, moduleName});