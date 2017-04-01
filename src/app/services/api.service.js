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
                var apiBaseUrl = '//45.55.161.191/api';
                return $http.get(apiBaseUrl + '/post/list').then(function(res) {
                    return res.data;
                });
            }
        }
})();