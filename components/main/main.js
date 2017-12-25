if (module.hot) {
	// require('./styles/bootstrap.less'); //require css via javascript if dev mode
	require('./main.styl'); //require css via javascript if dev mode
}

import '~bootstrap/js/dropdown';
import '~bootstrap/js/collapse';

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