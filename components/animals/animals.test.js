import mainHelper from '../main/js/main.helper';

const name = 'animals',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name;

describe(name + ' component', () => {
	it('should have valid template', () => {
		chai.assert(template);
	});

	it('should have valid controller', () => {
		chai.assert(controller);
		chai.expect(controller).to.be.a('function');
	});

	it('should set animalsDataService', () => {
		mainHelper.setModule({
			moduleName: 'app.animals'
		});

		const spy = sinon.spy(angular.module('app.animals'), 'factory');

		require('./' + name + '.data.service');

		const args = spy.firstCall.args,
			lastIndex = args[1].length - 1;

		chai.assert(args[0] === 'animalsDataService');

		chai.expect(args[1]).to.be.a('array');
		chai.expect(args[1][lastIndex]).to.be.a('function');

		angular.module('app.animals').factory.restore();
	});

	// angular.module('myApplicationModule', [])
	// 	.value('mode', 'app')
	// 	.value('version', 'v1.0.1');

	describe('MyApp', function() {
		// You need to load modules that you want to test,
		// it loads only the "ng" module by default.
		beforeEach(angular.mock.module('app.animals'));

		// inject() is used to inject arguments of all given functions
		it('should provide a version', (done) => {
			angular.mock.inject([
				'$injector',
				'animalsDataService',
				function($injector, animalsDataService) {
					chai.expect(animalsDataService).to.be.a('object');
					chai.expect(animalsDataService.getAll).to.be.a('function');

					const $httpBackend = $injector.get('$httpBackend');

					const authRequestHandler = $httpBackend.when('GET', 'data/animals.json')
						.respond([{}]);

					$httpBackend.expectGET('data/animals.json');

					const animals = animalsDataService.getAll();

					animals.then((data) => {
						chai.expect(data).to.be.a('array');
						done();
					});

					$httpBackend.flush();



					// setInterval(function() {
					// 	// console.log('animals', );

					// }, 1000);





					// console.log('animalsDataService', animalsDataService.getAll());

					// var promise = animalsDataService.getAll().then(function(resp) {

					// 	console.log('data', data);

					// });

					// console.log('$http', $http);

					// $http.get('data/animals.json', { cache: true }).then(function(resp) {
					// 	console.log(resp);
					// });

					// promise.then(function(data) {
					// 	console.log('data', data);
					// });
					// chai.expect(mode).to.equal('app');
				}
			])
		});

		// // The inject and module method can also be used inside of the it or beforeEach
		// it('should override a version and test the new version is injected', function() {
		// 	// module() takes functions or strings (module aliases)
		// 	// angular.mock.module(function($provide) {
		// 	// 	$provide.value('version', 'overridden'); // override version here
		// 	// });

		// 	// inject(function(version) {
		// 	// 	chai.expect(version).to.equal('overridden');
		// 	// });
		// });
	});



































	// it('should set 2', () => {
	// 	// angular.mock.module('app.animals');

	// 	// angular.mock.module('MyApp');
	// });

	// it('should bla', () => {

	// 	// angular.mock.module('MyApp')

	// 	// angular.mock.inject(function($injector) {

	// 	// 	console.log('$injector', $injector);
	// 	// 	// Set up the mock http service responses
	// 	// 	// $httpBackend = $injector.get('$httpBackend');
	// 	// 	// // backend definition common for all tests
	// 	// 	// authRequestHandler = $httpBackend.when('GET', '/auth.py')
	// 	// 	// 											 .respond({userId: 'userX'}, {'A-Token': 'xxx'});

	// 	// 	// // Get hold of a scope (i.e. the root scope)
	// 	// 	// $rootScope = $injector.get('$rootScope');
	// 	// 	// // The $controller service is used to create instances of controllers
	// 	// 	// var $controller = $injector.get('$controller');

	// 	// 	// createController = function() {
	// 	// 	// 	return $controller('MyController', {'$scope' : $rootScope });
	// 	// 	// };
	// 	// })

	// 	// var $httpBackend, $rootScope, createController, authRequestHandler;



	// 	// // Set up the module
	// 	// beforeEach();

	// 	// beforeEach();


	// 	// afterEach(function() {
	// 	// 	$httpBackend.verifyNoOutstandingExpectation();
	// 	// 	$httpBackend.verifyNoOutstandingRequest();
	// 	// });


	// 	// it('should fetch authentication token', function() {
	// 	// 	$httpBackend.expectGET('/auth.py');
	// 	// 	var controller = createController();
	// 	// 	$httpBackend.flush();
	// 	// });


	// 	// it('should fail authentication', function() {

	// 	// 	// Notice how you can change the response even after it was set
	// 	// 	authRequestHandler.respond(401, '');

	// 	// 	$httpBackend.expectGET('/auth.py');
	// 	// 	var controller = createController();
	// 	// 	$httpBackend.flush();
	// 	// 	expect($rootScope.status).toBe('Failed...');
	// 	// });


	// 	// it('should send msg to server', function() {
	// 	// 	var controller = createController();
	// 	// 	$httpBackend.flush();

	// 	// 	// now you don’t care about the authentication, but
	// 	// 	// the controller will still send the request and
	// 	// 	// $httpBackend will respond without you having to
	// 	// 	// specify the expectation and response for this request

	// 	// 	$httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
	// 	// 	$rootScope.saveMessage('message content');
	// 	// 	expect($rootScope.status).toBe('Saving...');
	// 	// 	$httpBackend.flush();
	// 	// 	expect($rootScope.status).toBe('');
	// 	// });


	// 	// it('should send auth header', function() {
	// 	// 	var controller = createController();
	// 	// 	$httpBackend.flush();

	// 	// 	$httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
	// 	// 		// check if the header was sent, if it wasn't the expectation won't
	// 	// 		// match the request and the test will fail
	// 	// 		return headers['Authorization'] === 'xxx';
	// 	// 	}).respond(201, '');

	// 	// 	$rootScope.saveMessage('whatever');
	// 	// 	$httpBackend.flush();
	// 	// });

	// });
});

// // testing controller
// describe('MyController', function() {
// 	var $httpBackend, $rootScope, createController, authRequestHandler;

// 	// Set up the module
// 	beforeEach(angular.mock.module('MyApp'));

// 	// beforeEach(angular.mock.inject(function($injector) {
// 	// 	// // Set up the mock http service responses
// 	// 	// $httpBackend = $injector.get('$httpBackend');
// 	// 	// // backend definition common for all tests
// 	// 	// authRequestHandler = $httpBackend.when('GET', '/auth.py')
// 	// 	// 	.respond({userId: 'userX'}, {'A-Token': 'xxx'});

// 	// 	// // Get hold of a scope (i.e. the root scope)
// 	// 	// $rootScope = $injector.get('$rootScope');
// 	// 	// // The $controller service is used to create instances of controllers
// 	// 	// var $controller = $injector.get('$controller');

// 	// 	// createController = function() {
// 	// 	// 		return $controller('MyController', {'$scope' : $rootScope });
// 	// 	// };
// 	// }));


// 	// afterEach(function() {
// 	// 	$httpBackend.verifyNoOutstandingExpectation();
// 	// 	$httpBackend.verifyNoOutstandingRequest();
// 	// });


// 	it('should fetch authentication token', function() {

// 		// angular.mock.inject(function($injector) {
// 		// 	console.log('$injector', $injector);
// 		// });
// 		// $httpBackend.expectGET('/auth.py');
// 		// var controller = createController();
// 		// $httpBackend.flush();
// 	});


// 	// it('should fail authentication', function() {

// 	// 	// Notice how you can change the response even after it was set
// 	// 	authRequestHandler.respond(401, '');

// 	// 	$httpBackend.expectGET('/auth.py');
// 	// 	var controller = createController();
// 	// 	$httpBackend.flush();
// 	// 	expect($rootScope.status).toBe('Failed...');
// 	// });


// 	// it('should send msg to server', function() {
// 	// 	var controller = createController();
// 	// 	$httpBackend.flush();

// 	// 	// now you don’t care about the authentication, but
// 	// 	// the controller will still send the request and
// 	// 	// $httpBackend will respond without you having to
// 	// 	// specify the expectation and response for this request

// 	// 	$httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
// 	// 	$rootScope.saveMessage('message content');
// 	// 	expect($rootScope.status).toBe('Saving...');
// 	// 	$httpBackend.flush();
// 	// 	expect($rootScope.status).toBe('');
// 	// });


// 	// it('should send auth header', function() {
// 	// 	var controller = createController();
// 	// 	$httpBackend.flush();

// 	// 	$httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
// 	// 			// check if the header was sent, if it wasn't the expectation won't
// 	// 			// match the request and the test will fail
// 	// 			return headers['Authorization'] === 'xxx';
// 	// 	}).respond(201, '');

// 	// 	$rootScope.saveMessage('whatever');
// 	// 	$httpBackend.flush();
// 	// });
// });

















