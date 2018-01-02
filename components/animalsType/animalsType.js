import mainHelper from '../main/js/main.helper';

const name = 'animalsType',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.animals';

require('./' + name + '.styl');

mainHelper.setComponent({
	name,
	template,
	controller,
	moduleName
});