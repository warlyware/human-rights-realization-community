(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('FirebaseService', FirebaseService);

        FirebaseService.$inject = ['$window', '$firebaseObject'];

        function FirebaseService($window, $firebaseObject) {

            return {
                initAppData: initAppData,
                getSyncedScopeObject: getSyncedScopeObject
            }

            function initAppData(scope) {
                var firebaseReference = $window.firebase.database().ref();
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, 'appData');
            }

            function getSyncedScopeObject(scope, firebaseReferenceString) {
                if (scope[firebaseReferenceString]) {
                    return scope[firebaseReferenceString];
                }
                var firebaseReference = $window.firebase.database().ref(firebaseReferenceString);
                var syncObject = $firebaseObject(firebaseReference);
                return syncObject.$bindTo(scope, firebaseReferenceString);
            }

        }
})();