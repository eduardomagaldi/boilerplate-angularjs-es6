export default function setComponent(componentName) {
	const subModuleName = 'app.' + componentName;

	angular.module(subModuleName)
		.component(componentName, {
			// templateUrl: 'components/hello/hello.html',
			template: componentName + ' template',
			controller: function() {
				console.log(componentName + ' controller');
			}
		})

		.config(['$stateProvider', function($stateProvider) {


			$stateProvider.state({
				name: 'future',
				url: 'future',
				component: 'future'
			});



			// console.log('config future');
			// $stateRegistryProvider.register({
			// 	name: 'future',
			// 	url: 'future',
			// 	component: 'future'
			// });
		}]);
}

