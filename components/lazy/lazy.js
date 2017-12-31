import componentsHelper from '../main/js/components.helper';

const name = 'lazy',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name;

require('./' + name + '.styl');


componentsHelper.setModule({
	moduleName
});

componentsHelper.setComponent({
	name,
	template,
	controller,
	moduleName
})

componentsHelper.setConfig({
	name,
	moduleName
});

module.exports = moduleName;