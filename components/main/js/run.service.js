angular.module('app').factory('runService', runService);

console.log('runService');

runService.$inject = ['$transitions', '$rootScope'];
function runService($transitions, $rootScope) {
	return () => {
		console.log('runService called');

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
	};
}