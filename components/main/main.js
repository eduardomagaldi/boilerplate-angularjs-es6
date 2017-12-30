if (module.hot) {
	require('./main.styl'); //require css via javascript if dev mode
}

import 'bootstrap/js/dropdown';
import 'bootstrap/js/collapse';
import './js/app';
import './js/config';
import './js/run';

angular.module('app').component('home', {
	bindings: { homeData: '<' },
	controller: function() { },
	template: `
	<h1>home state loaded: {{ $ctrl.homeData }}</h1>
	<div ui-view></div>
`});

angular.module('app').component('child', {
	bindings: { childData: '<' },
	controller: function($scope) { },
	template: `
	<h1>child state loaded: {{ $ctrl.childData }}</h1>
	<div ui-view></div>
`});


console.log("Scripts loading... ");


