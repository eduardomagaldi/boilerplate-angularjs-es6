import './run.service';

angular.module('app').run(run);

run.$inject = ['runService'];
function run(runService) {
	console.log('run called');
	runService();
}