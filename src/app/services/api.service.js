(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ApiService', ApiService);

        ApiService.$inject = ['$http'];

        function ApiService($http) {
            return {
                getPosts: getPosts
            }

            function getPosts() {
                var apiBaseUrl = 'http://0.0.0.0:3000/api'
                return $http.get(apiBaseUrl + '/post/list').then(function(res) {
                    return res.data;
                });
            }
        }
})();