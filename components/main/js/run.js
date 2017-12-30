import 'angular';
import '@uirouter/angularjs';

angular.module('app').run(run);

run.$inject = [];
function run() {
	console.log('main run');
	// $http.get('data/people.json', {cache: true});
}