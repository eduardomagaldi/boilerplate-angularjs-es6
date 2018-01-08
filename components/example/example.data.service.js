const componentName = 'example'; //change

angular
	.module('app.' + componentName)
	.factory(
		componentName + 'DataService',
		[
			'$http',
			service
		]
	);

////////////

function service($http) {
	const returnObj = {};

	returnObj[componentName] = function() {
		return $http.get('/').then(function(resp) {
			return resp.data;
		});
	};

	return returnObj;
}