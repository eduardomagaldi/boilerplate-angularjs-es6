if (module.hot) {
	require('./main.styl'); //require css via javascript if dev mode
}

import 'bootstrap/js/dropdown';
import 'bootstrap/js/collapse';

// import '~angular';
// import '~@uirouter';

import 'angular';
import '@uirouter/angularjs';

// import angular from 'angular';
// import uiRouter from 'angular-ui-router';

let o = {
	a: 1,
	b: 2,
	c: 3
};

console.log({
	...o,
	c: 'ble7'
});





var myApp = angular.module('hello', ['ui.router']);

myApp.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
	// An array of state definitions
	var states = [
		{ name: 'hello', url: '/hello', component: 'hello' },
		{ name: 'about', url: '/about', component: 'about' },

		{
			name: 'people',
			url: '/people',
			component: 'people',
			resolve: {
				people: people
			}
		},

		{
			name: 'people.person',
			url: '/{personId}',
			component: 'person',
			resolve: {
				person: person
			}
		}
	]

	people.$inject = ['PeopleService'];

	function people(PeopleService) {
		return PeopleService.getAllPeople();
	}

	person.$inject = ['people', '$stateParams'];

	function person(people, $stateParams) {
		return people.find(function(person) {
			return person.id === $stateParams.personId;
		});
	}

	// Loop over the state definitions and register them
	states.forEach(function(state) {
		$stateProvider.state(state);
	});
}

myApp.run(run);

run.$inject = ['$http', '$uiRouter'];

function run($http, $uiRouter) {
	// var Visualizer = window['ui-router-visualizer'].Visualizer;
	// $uiRouter.plugin(Visualizer);
	$http.get('data/people.json', { cache: true });
}

angular.module('hello').component('hello', {
	template:  '<h3>{{$ctrl.greeting}} galaxy!</h3>' +
						 '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

	controller: function() {
		this.greeting = 'hello';

		this.toggleGreeting = function() {
			this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
		}
	}
});

angular.module('hello').component('about', {
	template:  '<h3>Its the UI-Router "Hello Galaxy" app!</h3>'
});

angular.module('hello').component('people', {
	bindings: { people: '<' },

	template: '<div class="flex-h">' +
						'  <div class="people">' +
						'    <h3>Some people:</h3>' +
						'    <ul>' +
						'      <li ng-repeat="person in $ctrl.people">' +
						'        <a ui-sref-active="active" ui-sref="people.person({ personId: person.id })">' +
						'          {{person.name}}' +
						'        </a>' +
						'      </li>' +
						'    </ul>' +
						'  </div>' +
						'  <ui-view></ui-view>' +
						'</div>'
});

angular.module('hello').service('PeopleService', peopleService);

peopleService.$inject = ['$http'];

function peopleService($http) {
	console.log('$http', $http);

	var service = {
		getAllPeople: function() {
			return $http.get('data/people.json', { cache: true }).then(function(resp) {
				return resp.data;
			});
		},

		getPerson: function(id) {
			function personMatchesParam(person) {
				return person.id === id;
			}

			return service.getAllPeople().then(function (people) {
				return people.find(personMatchesParam)
			});
		}
	}

	return service;
}

angular.module('hello').component('person', {
	bindings: { person: '<' },
	template: '<h3>A person!</h3>' +

			'<div>Name: {{$ctrl.person.name}}</div>' +
			'<div>Id: {{$ctrl.person.id}}</div>' +
			'<div>Company: {{$ctrl.person.company}}</div>' +
			'<div>Email: {{$ctrl.person.email}}</div>' +
			'<div>Address: {{$ctrl.person.address}}</div>' +

			'<button ui-sref="people">Close</button>'
});

// if (module.hot) {
// 	require('webpack/hot/dev-server');
// }