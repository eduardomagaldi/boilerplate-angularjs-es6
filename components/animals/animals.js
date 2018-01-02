import mainHelper from '../main/js/main.helper';
import statesHelper from '../main/js/states.helper';

const name = 'animals',
	template = require('./' + name + '.html'),
	controller = require('./' + name + '.controller'),
	moduleName = 'app.' + name;

require('./' + name + '.styl');

mainHelper.setModule({
	moduleName
});

// require('./' + name + '.data.service');

// angular.module('app.animals').component('people', {
//   bindings: { people: '<' },

//   template: '<div class="flex-h">' +
//             '  <div class="people">' +
//             '    <h3>Some people:</h3>' +
//             '    <ul>' +
//             '      <li ng-repeat="person in $ctrl.people">' +
//             '        <a ui-sref-active="active" ui-sref="people.person({ personId: person.id })">' +
//             '          {{person.type}}' +
//             '        </a>' +
//             '      </li>' +
//             '    </ul>' +
//             '  </div>' +
//             '  <ui-view></ui-view>' +
//             '</div>'
// });

angular.module('app.animals').service('PeopleService', function($http) {
  var service = {
    getAllPeople: function() {
      return $http.get('../data/animals.json', { cache: true }).then(function(resp) {
      	console.log('resp.data', resp.data);
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
});

mainHelper.setComponent({
	name,
	template,
	controller,
	moduleName,
	bindings: {
		animals: '<'
	}
});

mainHelper.setComponent({
	name: 'people',
	template,
	// controller,
	moduleName,
	bindings: { people: '<' },
});

mainHelper.setConfig({
	name,
	moduleName,
	config
});

module.exports = moduleName;

// getAll.$inject = ['animalsDataService'];
// function getAll(animalsDataService) {
// 	return animalsDataService.getAll();
// }

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	statesHelper.setState($stateProvider, {
		name: name,
		// resolve: {
		// 	animals: getAll
		// }
	});

	// statesHelper.setState($stateProvider, {
	// 	name: name,
	// 	resolve: {
	// 		animals: getAll
	// 	}
	// });

	statesHelper.setState($stateProvider, {

		     name: 'people',
		     url: '/people',
		     component: 'people',
		     resolve: {
		       people: function(PeopleService) {
		         return PeopleService.getAllPeople();
		       }
		     }

	});
}