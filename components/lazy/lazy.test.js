// angular.module('myComponentModule', [])
// 	.component('myComponent', {
// 		bindings: {
// 			myBinding: '@'
// 		},
// 		controller: function() {
// 			this.myTitle = 'Unit Testing AngularJS';
// 		},
// 		template: '<h1>{{ $ctrl.myTitle }} {{ $ctrl.myBinding }}</h1>'
// 	});

describe('Component: home', function() {
	// beforeEach(
	// 	angular.mock.module('myComponentModule')
	// );

	var $uiView = angular.element('ui-view'),
		rootScope;

	// beforeEach(() => {
	// 	// angular.mock.module('app');
	// 	// angular.mock.module('app');
	// 	// angular.mock.inject(['$rootScope', function($rootScope) {
	// 	// 	console.log('$rootScope', $rootScope);

	// 	// 	// setInterval(() => {
	// 	// 	console.log('$rootScope.stateName', $rootScope.stateName);

	// 	// 	// }, 1000);
	// 	// 	// element = angular.element('<home></home>');

	// 	// 	// console.log('element', element);
	// 	// 	// element = $compile(element)(scope);
	// 	// 	// scope.outside = '1.5';
	// 	// 	// scope.$apply();
	// 	// }])

	// });
	// angular.module('app').factory('mockService', ['$rootScope', function($rootScope) {
	// 	console.log('$rootScope.stateName', $rootScope.stateName);
	// }]);

	// Defined out reference variable outside
	// var runService;

	// Wrap the parameter in underscores
	// beforeEach();



	// console.log('rootScope:');
	// angular.mock.inject(function(_$rootScope_) {
	// 	console.log('_$rootScope_', _$rootScope_);
	// });

	// Use myService in a series of tests.
	it('makes use of myService', function() {




		// myService.doStuff();
	});


	it('should render the home h1 text', function() {
		// var $h1 = $uiView.find('h1');

		// // console.log('rootScope', rootScope.stateName);

		// chai.expect($h1.text()).to.equal('Home');
	});
});


describe('in rootValGetter', function() {
	var scope;
	var testRootValGetter;

	beforeEach(function() {
		// angular.mock.inject(['$state', injectedFunction]);

		// function injectedFunction($state) {
		// 	chai.assert($state.get().length >= 2);
		// }

		// angular.mock.inject(function(_runService_, _$rootScope_) {
		// 	// scope = $rootScope.$new();

		// 	console.log('scope', scope);
		// 	_runService_();
		// });

		// angular.mock.inject(function ($rootScope) {
		// 	scope = $rootScope.$new();

		// 	console.log('scope', scope);



		// 	// angular.mock.inject(function ($injector) {
		// 	// 	testRootValGetterService = $injector.get('rootValGetterService');
		// 	// });
		// });
	});

	it('getVal returns the value from $rootScope', function() {

		// angular.mock.inject(function ($rootScope) {
		// 	scope = $rootScope.$new();



		// 	// angular.mock.inject(function ($injector) {
		// 	// 	testRootValGetterService = $injector.get('rootValGetterService');
		// 	// });
		// });

		// angular.mock.module(function($provide) {
		// 	$provide.value('$rootScope', scope);
		// });




		var value = 12345;

		scope.specialValue = value;

		chai.expect(testRootValGetterService.getVal()).toBe(value);
	});
})


// );