if (module.hot) {
	require('./main.styl'); //require css via javascript if dev mode
}

import 'bootstrap/js/dropdown';
import 'bootstrap/js/collapse';

import './js/app';
import './js/config';
import './js/run';