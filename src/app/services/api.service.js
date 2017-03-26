(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ApiService', ApiService);

        ApiService.$inject = [];

        function ApiService() {
            return {
                serviceTest: serviceTest
            }

            function serviceTest() {
                console.log('alive');
            }
        }
})();