import 'angular';
import '@uirouter/angularjs';

angular.module('app').config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {

	console.log('main config');
	var states = [
		{
			name: 'hello',
			url: '/hello',
			component: 'hello'
		},
		{
			name: 'about',
			url: '/about',
			component: 'about'
		},
		{
			name: 'people',
			url: '/people',
			component: 'people',
			resolve: {
				people: people
			}
		},
		{
			name: 'people.person',
			url: '/{personId}',
			component: 'person',
			resolve: {
				person: person
			}
		},
		// {
		// 	name: 'future',
		// 	url: '/future',
		// 	component: 'future',
		// 	lazyLoad: function ($transition$) {
		// 		return $transition$.injector().get('$ocLazyLoad').load('../../future/future.js');
		// 	}
		// }
		// {
		// 	name: 'future.**',
		// 	url: '/future',
		// 	// component: 'future2',
		// 	lazyLoad: function($transition) {

		// 		// return System.import('../../future/future.js');

		// 		// console.log('$transition', $transition);

		// 		var $ocLazyLoad = $transition.injector().get('$ocLazyLoad');
		// 		return System.import('../../future/future.js').then((mod) => {
		// 			console.log('mod', mod);
		// 			// $ocLazyLoad.load(mod.bla);
		// 		});
		// 	}
		// },
		{
			name: 'future.**',
			url: '/future',
			lazyLoad: function(transition) {
				const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
				return import('../../future/future.js')
					.then(mod => {
						$ocLazyLoad.load(mod.appFutureModule);
					});
			}
		}
	];

	people.$inject = ['PeopleService'];
	function people(PeopleService) {
		return PeopleService.getAllPeople();
	}

	person.$inject = ['people', '$stateParams'];
	function person(people, $stateParams) {
		return people.find(function(person) {
			return person.id === $stateParams.personId;
		});
	}

	// Loop over the state definitions and register them
	states.forEach(function(state) {
		$stateProvider.state(state);
	});
}