module.exports = controller;

controller.$inject = [
	'$stateParams',
	'exampleDataService' //change
];
function controller(
	$stateParams,
	exampleDataService //change
) {
	const vm = this;

	vm.title = 'Example Title';
	vm.exampleParam = $stateParams.example;

	vm.exampleList = [
		'list item 1',
		'list item 2',
		'list item 3'
	];

	vm.example = example;

	////////////

	function example() {
		exampleDataService.example();
	}
}