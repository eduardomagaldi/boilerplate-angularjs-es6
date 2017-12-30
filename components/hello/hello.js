angular.module('app').component('hello', {
	// templateUrl: 'components/hello/hello.html',
	template: '<h3>{{$ctrl.greeting}} galaxy!</h3><button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
	controller: function() {
		this.greeting = 'app';

		this.toggleGreeting = function() {
			this.greeting = (this.greeting === 'app') ? 'whats up' : 'app';
		};
	}
});