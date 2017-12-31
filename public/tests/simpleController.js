(function () {
    'use strict';

    angular
        .module('app')
        .controller('SimpleController', Controller);

    function Controller(SimpleService) {
        var vm = this;

        initController();

        function initController() {
            // do something with the simple service
            SimpleService.DoSomething();
        }
    }
})();