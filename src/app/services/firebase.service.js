(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                getBaseUrl: getBaseUrl,
                getSyncedScopeObject: getSyncedScopeObject
            }

            var baseUrl = 'gs://hrrc-32aeb.appspot.com/';

            function getBaseUrl() {
                return baseUrl;
            }

            function getSyncedScopeObject(scope, scopeVar, firebaseReferenceString) {
                if (scope[firebaseReferenceString]) {
                    return scope[firebaseReferenceString];
                }
                var firebaseReference = $window.firebase.database().ref(firebaseReferenceString);
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, scopeVar);
            }

        }
})();