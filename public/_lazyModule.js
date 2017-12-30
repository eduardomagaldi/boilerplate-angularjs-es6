let lazyModule = angular.module('lazy', ['ui.router']);

lazyModule.config($stateProvider => {
	$stateProvider.state('lazy', {
		url: '/lazy',
		component: 'lazyComponent'
	});

	$stateProvider.state('lazy.foo', {
		url: '/foo',
		component: 'fooComponent',
		resolve: { fooData: () => "Some foo resolve data" }
	});

	$stateProvider.state('lazy.bar', {
		url: '/bar',
		component: 'barComponent',
		resolve: { serviceData: (lazyService) => lazyService.getServiceData() }
	});
});

lazyModule.service('lazyService', function($http) {
	this.getServiceData = function() {
		return $http.get('serviceData.json').then(resp => resp.data);
	}
})


lazyModule.component('lazyComponent', {
	template: `
		<h1>Lazy Module component!</h1>
		<a ui-sref=".foo">Foo</a><br>
		<a ui-sref=".bar">Bar</a><br>
		<ui-view></ui-view>
	`
});

lazyModule.component('fooComponent', {
	bindings: { fooData: '<' },
	template: `
		<h3>The foo component</h1>
		{{ $ctrl.fooData }}
	`
});

lazyModule.component('barComponent', {
	bindings: { serviceData: '<' },
	template: `
		<h3>The bar component</h1>
		Data from lazy service:
		<pre>{{ $ctrl.serviceData | json }}</pre>
	`
});