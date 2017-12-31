(function () {
    'use strict';

    angular
        .module('app')
        .factory('SimpleService', Service); 
      
    function Service($log) {
        var service = {
            DoSomething: doSomething
        };
    
        return service;
    
        function doSomething() {
            $log.info('something done!');
        }
    }
})();