const componentName = 'animalsType';

angular
	.module('app.' + componentName)
	.factory(componentName + 'DataService', service);

service.inject = ['$http'];
function service($http) {
	return {
		getByType: function(type) {
			// console.log('getByType:', type);

			return $http.get('../data/animals.json', { cache: true }).then(function(resp) {
				// resp.data.forEach(function(animalsType) {

				// 	console.log('animalsType', animalsType);

				// 	if (animalsType.type === type) {
				// 		console.log('equal', type, animalsType);
				// 		return animalsType;
				// 	}
				// });


				return resp.data.find(function(animalsType) {
					return animalsType.type === type;
				});
			});
		}
	};
}