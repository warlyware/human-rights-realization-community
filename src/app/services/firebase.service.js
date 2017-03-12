(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                getSyncedScopeObject: getSyncedScopeObject,
                getDataStore: getDataStore
            }


            function getDataStore() {
                var storage = firebase.storage();
                return firebase.storage().ref();
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