const componentName = 'animals';

angular
	.module('app.' + componentName)
	.factory(componentName + 'DataService', service);

service.inject = ['$http'];
function service($http) {
	return {
		getAll: function() {
			return $http.get('../data/animals.json')
				.then(function(resp) {
					console.log('resp.data', resp.data);
					return resp.data;
				}, function(error) {
					console.error('error', error);
				});
		}
	}
}

