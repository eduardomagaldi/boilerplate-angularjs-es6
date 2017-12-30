if (module.hot) {
	require('./main.styl'); //require css via javascript if dev mode
}

import 'bootstrap/js/dropdown';
import 'bootstrap/js/collapse';
import './js/app';
import './js/config';
import './js/run';





import '../hello/hello';





let o = {
	a: 1,
	b: 2,
	c: 3
};

console.log({
	...o,
	c: 'ble7'
});

angular.module('app').component('about', {
	template: '<h3>Its the UI-Router "app Galaxy" app!</h3>'
});

angular.module('app').component('people', {
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

angular.module('app').service('PeopleService', peopleService);

peopleService.$inject = ['$http'];

function peopleService($http) {
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

angular.module('app').component('person', {
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