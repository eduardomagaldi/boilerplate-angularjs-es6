describe('Main module', function() {
	describe('app.js', function() {
		it('should create main module correctly', function() {
			const spyModule = sinon.spy(angular, 'module');

			require('../app.js');

			chai.assert(spyModule.calledOnce);
			chai.assert(spyModule.calledWith('app'));

			angular.module.restore();
		});
	});

	describe('config.js', function() {
		it('should set main config function', function() {
			const spyConfig = sinon.spy(angular.module('app'), 'config');

			require('../config.js');

			chai.assert(spyConfig.calledOnce);

			angular.module('app').config.restore();

			console.log('angular.module', angular.module('app'));
		});
	});

	describe('config.js', function() {
		it('should map routes to controllers', function() {
			angular.mock.module('app');

			angular.mock.inject(function($state) {

				console.log('$state', $state);

				chai.expect($route.routes['/phones'].controller).toBe('PhoneListCtrl');
				chai.expect($route.routes['/phones'].templateUrl).
					toEqual('partials/phone-list.html');

				chai.expect($route.routes['/phones/:phoneId'].templateUrl).
					toEqual('partials/phone-detail.html');
				chai.expect($route.routes['/phones/:phoneId'].controller).
					toEqual('PhoneDetailCtrl');

				// otherwise redirect to
				chai.expect($route.routes[null].redirectTo).toEqual('/phones')
			});
		});
	});




	// describe('setComponent', function() {
	// 	it('should create component correctly', function() {
	// 		const spyComponent = sinon.spy(angular.module('mn'), 'component');

	// 		componentsHelper.setComponent({
	// 			name: 'compName',
	// 			moduleName: 'mn',
	// 			template: 't',
	// 			controller: 'c'
	// 		});

	// 		chai.assert(
	// 			spyComponent.calledWithExactly(
	// 				'compName',
	// 				{
	// 					template: 't',
	// 					controller: 'c',
	// 					controllerAs: 'vm'
	// 				}
	// 			)
	// 		);
	// 	});
	// });

	// describe('setConfig', function() {
	// 	it('should run config correctly with default function', function() {
	// 		const spyConfig = sinon.spy(angular.module('mn'), 'config');
	// 		let args;

	// 		componentsHelper.setConfig({
	// 			moduleName: 'mn'
	// 		});

	// 		chai.expect(spyConfig.calledOnce).to.equal(true);

	// 		args = spyConfig.firstCall.args[0];

	// 		chai.expect(args).to.be.a('function');
	// 	});

	// 	it('should run config correctly with passed function', function() {
	// 		let spyConfig2;
	// 		const func = function() {};

	// 		componentsHelper.setModule({moduleName: 'mn2'});

	// 		spyConfig2 = sinon.spy(angular.module('mn2'), 'config');

	// 		componentsHelper.setConfig({
	// 			moduleName: 'mn2',
	// 			config: func
	// 		});

	// 		chai.assert(spyConfig2.calledOnce);
	// 		chai.assert(
	// 			spyConfig2.calledWithExactly(func)
	// 		);
	// 	});
	// });
});