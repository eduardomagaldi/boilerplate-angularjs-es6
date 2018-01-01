angular.module('app').factory('runService', runService);

/////////////////

runService.$inject = ['$transitions', '$rootScope'];
function runService($transitions, $rootScope) {
	return () => {
		$transitions.onEnter({}, ($state, $transition) => {
			$rootScope.loading = true;
			console.log('transition onEnter', $state, $transition); // eslint-disable-line no-console
		});

		$transitions.onSuccess({}, ($transition) => {
			console.log('onSuccess', $transition.$to().name); // eslint-disable-line no-console
			$rootScope.loading = false;
			$rootScope.stateName = $transition.$to().name;
			$rootScope.stateNameClass = 'state-' + $transition.$to().name;
		});

		$transitions.onError({ to: 'stateName' }, function($error) {
			console.error('transition onError', $error); // eslint-disable-line no-console
		});
	};
}