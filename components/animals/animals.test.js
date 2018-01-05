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

	it('should request animals data', (done) => {
		angular.mock.module('app.animals');
		angular.mock.inject([
			'$injector',
			'animalsDataService',
			function($injector, animalsDataService) {
				chai.expect(animalsDataService).to.be.a('object');
				chai.expect(animalsDataService.getAll).to.be.a('function');

				const $httpBackend = $injector.get('$httpBackend');

				$httpBackend.when('GET', 'data/animals.json')
					.respond([{}]);

				$httpBackend.expectGET('data/animals.json');

				const animals = animalsDataService.getAll();

				animals.then((data) => {
					chai.expect(data).to.be.a('array');
					done();
				});

				$httpBackend.flush();
			}
		])
	});
});