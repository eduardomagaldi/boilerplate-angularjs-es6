import statesHelper from './states.helper';

describe('statesHelper', function() {
	var mockStateProvider,
		spy;

	describe('setState', function() {
		beforeEach(function() {
			mockStateProvider = {
				state: () => {}
			};

			spy = sinon.spy(mockStateProvider, 'state');
		});

		it('should set simple state correctly', function() {
			statesHelper.setState(mockStateProvider, {name: 'statename'});

			chai.assert(
				spy.calledWithExactly({
					name: 'statename',
					url: '/statename',
					component: 'statename'
				})
			);
		});

		it('should set lazy state correctly', function() {
			let args;

			statesHelper.setState(
				mockStateProvider,
				{
					name: 'statename',
					lazy: true
				}
			);

			args = spy.firstCall.args[0];

			chai.expect(args.name).to.equal('statename.**');
			chai.expect(args.lazyLoad).to.be.a('function');
			chai.expect(args.component).to.equal(undefined);
			chai.expect(args.url).to.equal('/statename');
		});

		it('should overwrite all default properties', function() {
			let args;

			statesHelper.setState(
				mockStateProvider,
				{
					name: 'statename',
					component: 'special-component',
					url: '/my-special-url',
					anotherProperty: true
				}
			);

			args = spy.firstCall.args[0];

			chai.expect(args.name).to.equal('statename');
			chai.expect(args.component).to.equal('special-component');
			chai.expect(args.url).to.equal('/my-special-url');
			chai.expect(args.anotherProperty).to.equal(true);
		});
	});
});