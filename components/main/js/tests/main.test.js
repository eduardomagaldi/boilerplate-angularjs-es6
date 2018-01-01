describe('Main module', () => {
	var rootScope;

	describe('app.js', () => {
		it('should create main module', () => {
			const spyModule = sinon.spy(angular, 'module');

			require('../app.module.js');

			chai.assert(spyModule.calledOnce);
			chai.assert(spyModule.calledWith('app'));

			angular.module.restore();
		});
	});

	describe('config.js and run.js', () => {
		it('should set main config function', () => {
			const spyConfig = sinon.spy(angular.module('app'), 'config');

			require('../config.js');

			chai.assert(spyConfig.calledOnce);

			angular.module('app').config.restore();
		});

		it('should have set run function', () => {
			const spyRun = sinon.spy(angular.module('app'), 'run');

			require('../run.js');

			chai.assert(spyRun.calledOnce);

			angular.module('app').run.restore();
		});

		it('should have set at least 2 states in module', () => {
			angular.mock.inject(function(_$rootScope_) {
				// scope = $rootScope.$new();

				rootScope = _$rootScope_;

				// console.log('scope', scope);
				// _runService_();
			});


			angular.mock.module('app', function($provide) {
	            $provide.value('$rootScope', rootScope);
	        });

			angular.mock.inject(['$state', injectedFunction]);

			function injectedFunction($state) {
				chai.assert($state.get().length >= 2);
			}

			// angular.mock.module('app');

			// angular.mock.module(function($provide) {
			// 	$provide.value('$rootScope', {bla: true});
			// });
		});
	});
});