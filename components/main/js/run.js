angular.module('app').run(($rootScope, $state, $location) => Object.assign($rootScope, { $state, $location }));


// import 'angular';
// import '@uirouter/angularjs';

// angular.module('app').run(run);

// run.$inject = ['$rootScope'];
// function run($rootScope) {
// 	console.log('main run2', $rootScope);

// 	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
// 		console.error('$stateChangeStart', event, toState, toParams, fromState, fromParams, error);
// 	});

// 	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
// 		console.error('$stateChangeError', event, toState, toParams, fromState, fromParams, error);
// 	});

// 	// $http.get('data/people.json', {cache: true});
// }