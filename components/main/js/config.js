import statesHelper from './states.helper';

angular.module('app').config(config);

///////////////

config.$inject = [
	'$stateProvider',
	'$urlRouterProvider'
];

function config(
	$stateProvider,
	$urlRouterProvider
) {
	statesHelper.setState($stateProvider, {
		name: 'home',
		url: '/'
	});

	statesHelper.setState($stateProvider, {
		name: 'lazy',
		lazy: true
	});

	statesHelper.setState($stateProvider, {
		name: 'animals',
		lazy: true
	});

	statesHelper.setState($stateProvider, {
		name: 'page404',
		url: '/404-not-found'
	});

		$stateProvider
		    .state('home1', {
		        url: '/home1',
		         // template: 'templates/settings.html'
		        // views: {
		        //     $default: {
		        //     	template: 'templates/settings.html ==> <ui-view></ui-view>'
		        //     }
	        	// },

	        	views: {
	        	   $default: {
	        	     template: 'home1<div ui-view></div>'
	        	   },
	        	 }
		    })


	// var contacts = {
	// 		name: 'contacts',  //mandatory
	// 		template: 'contacts.html',
	// 		url: '/contacts'
	// }
	// var contactsList = {
	// 		name: 'list', //mandatory. This counter-intuitive requirement addressed in issue #368
	// 		parent: 'contacts',  //mandatory
	// 		template: 'contacts.list.html',
	// 		url: '/list'
	// }

	// $stateProvider
	// 	.state(contacts)
	// 	.state(contactsList)




	// $stateProvider
	//     .state('home', {
	//         url: '/',
	//          // template: 'templates/settings.html'
	//         // views: {
	//         //     $default: {
	//         //     	template: 'templates/settings.html ==> <ui-view></ui-view>'
	//         //     }
 //        	// },

 //        	views: {
 //        	   $default: {
 //        	     template: '<div ui-view></div>'
 //        	   },
 //        	   main: {
 //        	     template: 'home'
 //        	   },
 //        	 }
	//     })
	//     .state('settings', {
	//         url: '/settings',
	//          // template: 'templates/settings.html'
	//         // views: {
	//         //     $default: {
	//         //     	template: 'templates/settings.html ==> <ui-view></ui-view>'
	//         //     }
 //        	// },

 //        	views: {
 //        	   $default: {
 //        	     // template: '<div ui-view></div>',
 //        	     template: '<div ui-view>settings</div>'
 //        	   },
 //        	   main: {
 //        	     template: '<div ui-view>settings</div>'
 //        	   },
 //        	 }
	//     })
	//     .state('settings.profile', {
	//         url: '/profile',
	//         // template: 'templates/profile.html',
	//         // views: {
	//         //     'main': { template: 'templates/profile.html' }
	//         // }
	//         views: {
	//            $default: {
	//              // template: '<div ui-view></div>',
	//              template: 'profile default'
	//            },
	//            main: {
	//              template: 'profile'
	//            },
	//          }
	//     })
	//     .state('settings.account', {
	//         url: '/account',
	//         template: 'templates/account.html'
	//     });




	$stateProvider.onInvalid(($to$, $from$) => {
		console.error('onInvalid', $to$, $from$); // eslint-disable-line no-console
	});

	$urlRouterProvider.when('', '/');

	$urlRouterProvider.otherwise('/404-not-found');
}