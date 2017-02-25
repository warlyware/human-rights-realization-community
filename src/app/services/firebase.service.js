(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                getFirebaseRef: getFirebaseRef,
                getSyncedObject: getSyncedObject
            }

            var firebaseReference = $window.firebase.database().ref();;

            function getFirebaseReference() {
                return firebaseReference;
            }

            function getSyncedScopeObject(scope, scopeVar) {
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, scopeVar);
            }

        }
})();