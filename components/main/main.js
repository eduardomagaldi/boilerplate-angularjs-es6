// var css = require('!raw!stylus!./main.styl'); // Just the CSS
// var css = require('./main.styl'); // CSS with processed url(...)s

if (module.hot) {
	require('./main.styl'); //require css via javascript if in dev mode
}

// import jQuery from 'jquery';
// import bootstrapjs from 'bootstrap/dist/js/bootstrap.min.js';

// import $ from 'jquery';
// import jQuery from 'jquery';
// // window.$ = $;
// // window.jQuery = $;
// import 'bootstrap/dist/js/bootstrap.min.js';

// import 'bootstrap/js/dist/util';
import 'bootstrap/js/dropdown';

let o = {
	a: 1,
	b: 2,
	c: 3
};

console.log({
	...o,
	c: 'ble6'
});

// if (module.hot) {
// 	require('webpack/hot/dev-server');
// }