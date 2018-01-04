const componentName = 'animalsType';

angular
	.module('app.' + componentName)
	.factory(componentName + 'DataService', service);

service.inject = ['$http'];
function service($http) {
	return {
		getByType: function(type) {
			return $http.get('../data/animals.json', { cache: true }).then(function(resp) {
				return resp.data.find(function(animalsType) {
					return animalsType.type === type;
				});
			});
		},
		getAnimalImage: function(animal, callback) {
			$http.get('../data/image.json').then(function(resp) {
				callback(resp.data.media + '?t=' + new Date().getTime());
			});
		}
	};
}