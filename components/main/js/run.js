angular.module('app').run(run);

run.$inject = ['$transitions', '$rootScope'];
function run($transitions, $rootScope) {
	$transitions.onSuccess({}, ($transition) => {
		console.log('onSuccess', $transition.$to().name);
		$rootScope.stateName = $transition.$to().name;
		$rootScope.stateNameClass = 'state-' + $transition.$to().name;
	});

	$transitions.onEnter({}, ($state, $transition) => {
		console.log('transition onEnter', $state, $transition);
	});

	$transitions.onError({ to: 'stateName' }, function($error) {
		console.error('transition onError', $error);
	});
}