const componentName = 'animals';

angular
	.module('app.' + componentName)
	.factory(componentName + 'DataService', service);

service.inject = ['$http'];
function service($http) {
	return {
		getAll: function() {
			return $http.get('../data/animals.json', { cache: true }).then(function(resp) {
				return resp.data;
			});
		},

		getType: function(id) {
			function personMatchesParam(person) {
				return person.id === id;
			}

			return service.getAllPeople().then(function (people) {
				return people.find(personMatchesParam)
			});
		}
	};
}