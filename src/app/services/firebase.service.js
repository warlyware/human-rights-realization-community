(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                getFirebaseReference: getFirebaseReference,
                getSyncedScopeObject: getSyncedScopeObject
            }


            function getFirebaseReference() {
                return firebaseReference;
            }

            function getSyncedScopeObject(scope, scopeVar) {
                var firebaseReference = $window.firebase.database().ref();
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, scopeVar);
            }

        }
})();