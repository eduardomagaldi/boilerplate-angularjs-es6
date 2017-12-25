// var css = require('!raw!stylus!./main.styl'); // Just the CSS
// var css = require('./main.styl'); // CSS with processed url(...)s

if (module.hot) {
	require('./main.styl'); //require css via javascript if in dev mode
}

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