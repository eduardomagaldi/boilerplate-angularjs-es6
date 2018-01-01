if (module.hot) {
	require('./main.styl'); //require css via javascript if dev mode
}

import './js/vendor';

import './js/app.module';
import './js/config';
import './js/run';
