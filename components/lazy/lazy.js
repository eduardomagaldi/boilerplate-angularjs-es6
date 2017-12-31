import template from './lazy.html';

console.log('template', template);

const componentName = 'lazy',
	subModule = angular.module('app.' + componentName, ['ui.router']);

// export default function setComponent(componentName) {
const subModuleName = 'app.' + componentName;

console.log('subModuleName', subModuleName);

angular.module(subModuleName)
	.component(componentName, {
		// templateUrl: 'components/hello/hello.html',
		template: template,
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
	}]);
// }




export {subModule};