import componentsHelper from './components.helper';

describe('componentsHelper', function() {
	var spy;

	describe('setComponent', function() {
		// beforeEach(function() {
		// 	spyComponent = sinon.spy(angular, 'component');

		// });

		it('should create sub module correctly', function() {
			const spyModule = sinon.spy(angular, 'module');

			componentsHelper.setComponent({moduleName: 'mn'});

			// spyModule

			chai.assert(
				spyModule.calledWithExactly(
					'mn',
					['ui.router']
				)
			);
		});

		// it('should set lazy state correctly', function() {
		// 	let args;

		// 	statesHelper.setState(
		// 		mockStateProvider,
		// 		{
		// 			name: 'statename',
		// 			lazy: true
		// 		}
		// 	);

		// 	args = spy.firstCall.args[0];

		// 	expect(args.name).to.equal('statename.**');
		// 	expect(args.lazyLoad).to.be.a('function');
		// 	expect(args.component).to.equal(undefined);
		// 	expect(args.url).to.equal('/statename');
		// });

		// it('should overwrite all default properties', function() {
		// 	let args;

		// 	statesHelper.setState(
		// 		mockStateProvider,
		// 		{
		// 			name: 'statename',
		// 			component: 'special-component',
		// 			url: '/my-special-url',
		// 			anotherProperty: true
		// 		}
		// 	);

		// 	args = spy.firstCall.args[0];

		// 	expect(args.name).to.equal('statename');
		// 	expect(args.component).to.equal('special-component');
		// 	expect(args.url).to.equal('/my-special-url');
		// 	expect(args.anotherProperty).to.equal(true);
		// });
	});
});