import '../vendor';

require('mocha/mocha.css');

import 'mocha';

import chai from 'chai';
import sinon from 'sinon';

window.sinon = sinon;
window.chai = chai;

mocha.setup({
	'ui': 'bdd',
	'reporter': 'html'
});

require('angular-mocks');

require('./main.test');

require('./states.helper.test');
require('./components.helper.test');

require('../../../lazy/lazy.test');

mocha.run();