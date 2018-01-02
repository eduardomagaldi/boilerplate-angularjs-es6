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

mainHelper.setConfig({
	name,
	moduleName,
	config
});

mainHelper.setComponent({
	name,
	template,
	controller,
	moduleName
});

mainHelper.setComponent({
	name: 'bla',
	template: '<h1>bla</bla>',
	controller: function() {console.log('bla');},
	moduleName
});

// require('../animalsType/animalsType.js');

module.exports = moduleName;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	// statesHelper.setState($stateProvider, {
	// 	name: 'animals'
	// });

	// statesHelper.setState($stateProvider, {
	// 	name: 'animals.type',
	// 	// parent: 'animals',
	// 	url: '/type/{animalType}',
	// 	component: 'bla'
	// });


		$stateProvider
		    .state('home2', {
		        url: '/home2',
		         // template: 'templates/settings.html'
		        // views: {
		        //     $default: {
		        //     	template: 'templates/settings.html ==> <ui-view></ui-view>'
		        //     }
	        	// },

	        	views: {
	        	   $default: {
	        	     template: 'home2<div ui-view></div>'
	        	   },
	        	 }
		    })
		    .state('settings', {
		        url: '/settings',
		         // template: 'templates/settings.html'
		        // views: {
		        //     $default: {
		        //     	template: 'templates/settings.html ==> <ui-view></ui-view>'
		        //     }
	        	// },

	        	views: {
	        	   $default: {
	        	     // template: '<div ui-view></div>',
	        	     template: '<div ui-view>settings</div>'
	        	   },
	        	   main: {
	        	     template: '<div ui-view>settings</div>'
	        	   },
	        	 }
		    })
		    .state('settings.profile', {
		        url: '/profile',
		        // template: 'templates/profile.html',
		        // views: {
		        //     'main': { template: 'templates/profile.html' }
		        // }
		        views: {
		           $default: {
		             // template: '<div ui-view></div>',
		             template: 'profile default'
		           },
		           main: {
		             template: 'profile'
		           },
		         }
		    })
		    .state('settings.account', {
		        url: '/account',
		        template: 'templates/account.html'
		    });
}