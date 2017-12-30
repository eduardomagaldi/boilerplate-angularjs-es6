// import template from './lazy.html';

export default function setComponent(componentName) {
	const subModuleName = 'app.' + componentName;

	console.log('subModuleName', subModuleName);

	angular.module(subModuleName)
		.component(componentName, {
			// templateUrl: 'components/hello/hello.html',
			// template: template,
			controller: function() {
				console.log(componentName + ' controller');
			}
		})

		.config(['$stateProvider', function($stateProvider) {


			$stateProvider.state({
				name: 'lazy',
				url: '/lazy',
				component: 'lazy'
			});



			// console.log('config future');
			// $stateRegistryProvider.register({
			// 	name: 'future',
			// 	url: 'future',
			// 	component: 'future'
			// });
		}]);





		// angular.module(subModuleName).config($stateProvider => {
		// 	// $stateProvider.state('lazy', {
		// 	// 	url: '/lazy',
		// 	// 	component: 'lazyComponent'
		// 	// });

		// 	$stateProvider.state('lazy.foo', {
		// 		url: '/foo',
		// 		component: 'fooComponent',
		// 		resolve: { fooData: () => "Some foo resolve data" }
		// 	});

		// 	$stateProvider.state('lazy.bar', {
		// 		url: '/bar',
		// 		component: 'barComponent',
		// 		resolve: { serviceData: (lazyService) => lazyService.getServiceData() }
		// 	});
		// });

		// angular.module(subModuleName).service('lazyService', function($http) {
		// 	this.getServiceData = function() {
		// 		return $http.get('serviceData.json').then(resp => resp.data);
		// 	}
		// })


		// angular.module(subModuleName).component('lazyComponent', {
		// 	template: `
		// 		<h1>Lazy Module component!</h1>
		// 		<a ui-sref=".foo">Foo</a><br>
		// 		<a ui-sref=".bar">Bar</a><br>
		// 		<ui-view></ui-view>
		// 	`
		// });

		// angular.module(subModuleName).component('fooComponent', {
		// 	bindings: { fooData: '<' },
		// 	template: `
		// 		<h3>The foo component</h1>
		// 		{{ $ctrl.fooData }}
		// 	`
		// });

		// angular.module(subModuleName).component('barComponent', {
		// 	bindings: { serviceData: '<' },
		// 	template: `
		// 		<h3>The bar component</h1>
		// 		Data from lazy service:
		// 		<pre>{{ $ctrl.serviceData | json }}</pre>
		// 	`
		// });


}

