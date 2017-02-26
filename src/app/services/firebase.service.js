(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                getSyncedScopeObject: getSyncedScopeObject
            }

            function getSyncedScopeObject(scope, firebaseReferenceString) {
                var firebaseReference = $window.firebase.database().ref(firebaseReferenceString);
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, firebaseReferenceString);
            }

        }
})();