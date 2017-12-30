console.log('future.js');

export const appFutureModule = angular.module('app.future', []);

// export default angular.module('app.future', []);

angular.module('app.future')
	.component('bla', {
		// templateUrl: 'components/hello/hello.html',
		template: 'bla template',
		controller: function() {
			console.log('bla controller');
		}
	})

	.config(['$stateRegistryProvider', function($stateRegistryProvider) {
		console.log('config future');
		$stateRegistryProvider.register({
			name: 'bla',
			url: 'bla',
			component: 'bla'
		});
	}]);


//.config(config);

// CONTACTS_MODULE.config(['$stateRegistryProvider', function($stateRegistry) {
// 	$stateRegistry.register(contactsState);
// 	$stateRegistry.register(newContactState);
// 	$stateRegistry.register(viewContactState);
// 	$stateRegistry.register(editContactState);
// }]);

















// angular.module('app').component('future', {
// 	// templateUrl: 'components/hello/hello.html',
// 	template: 'future template',
// 	controller: function() {
// 		console.log('future controller');
// 	}
// }).config(config);

// angular.module('app').component('bla', {
// 	// templateUrl: 'components/hello/hello.html',
// 	template: 'bla template',
// 	controller: function() {
// 		console.log('bla controller');
// 	}
// }).config(config);

// config.$inject = ['$stateProvider'];
// function config($stateProvider) {


// 	console.log('config');

// 	$stateProvider.state({
// 		name: 'future',
// 		url: '/future',
// 		component: 'future'
// 	});

// 	$stateProvider.state({
// 		name: 'bla',
// 		url: '/bla',
// 		component: 'bla'
// 	});



// 	var states = [
// 		{
// 			name: 'hello',
// 			url: '/hello',
// 			component: 'hello'
// 		},
// 		{
// 			name: 'about',
// 			url: '/about',
// 			component: 'about'
// 		},
// 		{
// 			name: 'people',
// 			url: '/people',
// 			component: 'people',
// 			resolve: {
// 				people: people
// 			}
// 		},
// 		{
// 			name: 'people.person',
// 			url: '/{personId}',
// 			component: 'person',
// 			resolve: {
// 				person: person
// 			}
// 		},
// 		// {
// 		// 	name: 'future',
// 		// 	url: '/future',
// 		// 	component: 'future',
// 		// 	lazyLoad: function ($transition$) {
// 		// 		return $transition$.injector().get('$ocLazyLoad').load('../../future/future.js');
// 		// 	}
// 		// }

// 	];

// 	// // Loop over the state definitions and register them
// 	// states.forEach(function(state) {

// 	// });
// }



// // angular.module('app').run(run);

// // run.$inject = [];
// // function run() {
// // 	console.log('run');
// // 	// $http.get('data/people.json', {cache: true});
// // }