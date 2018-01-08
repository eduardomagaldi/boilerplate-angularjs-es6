import mainHelper from '../main/js/main.helper';

const name = 'example',
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

	it('should set ' + name + 'DataService', () => {
		mainHelper.setModule({
			moduleName
		});

		const spy = sinon.spy(angular.module(moduleName), 'factory');

		require('./' + name + '.data.service');

		let args = spy.firstCall.args,
			lastIndex = args[1].length - 1;

		chai.assert(args[0] === name + 'DataService');

		chai.expect(args[1]).to.be.a('array');
		chai.expect(args[1][lastIndex]).to.be.a('function');

		angular.module(moduleName).factory.restore();
	});

	it('should request ' + name + ' data by type', (done) => {
		angular.mock.module(moduleName);
		angular.mock.inject([
			'$injector',
			name + 'DataService',
			function($injector, exampleDataService) {
				chai.expect(exampleDataService).to.be.a('object');
				chai.expect(exampleDataService.example).to.be.a('function');

				const $httpBackend = $injector.get('$httpBackend');

				$httpBackend.when('GET', '/')
					.respond([]);

				$httpBackend.expectGET('/');

				let example = exampleDataService.example('Reptile');

				example.then((data) => {
					chai.expect(data).to.be.a('object');
					done();
				});

				$httpBackend.flush();
			}
		]);
	});
});