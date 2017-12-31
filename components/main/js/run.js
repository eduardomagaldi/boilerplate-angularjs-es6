// angular.module('app').run(run);

// angular.module('app').run(($rootScope, $state, $location) => Object.assign($rootScope, { $state, $location }));

// // import 'angular';
// // import '@uirouter/angularjs';

angular.module('app').run(run);

run.$inject = ['$transitions'];
function run($transitions) {
	$transitions.onSuccess({}, (event, toState) => {
		console.log('onSuccess', event, toState);
	});

	$transitions.onEnter({}, function($state, $transition) {
		console.log('transition onEnter', $state, $transition);
	});

	$transitions.onError({ to: 'stateName' }, function($error) {
		console.error('transition onError', $error);
	});
}