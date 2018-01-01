import '../vendor';

require('mocha/mocha.css');

import 'mocha';

import chai from 'chai';
import sinon from 'sinon';

console.log('mocha', mocha);

window.sinon = sinon;
window.chai = chai;
console.log('chai', chai);
console.log('window', window);

mocha.setup({
	'ui': 'bdd',
	'reporter': 'html'
});

require('angular-mocks');

// import * as angular from 'angular';
// import 'angular-mocks';

// describe('some component', () => {

//     beforeEach(() => {
//         angular.mock.module('someModule');
//     });

// });



require('./main.test');

require('./states.helper.test');
require('./components.helper.test');

mocha.run();

// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/collapse';

// import './js/app';
// import './js/config';
// import './js/run';

// function loadScripts() {
// 	var script = document.createElement('script');
// 	script.onload = function() {
// 	  alert("Script loaded and ready");
// 	};
// 	script.src = "http://whatever.com/the/script.js";
// 	document.getElementsByTagName('head')[0].appendChild(script);
// }