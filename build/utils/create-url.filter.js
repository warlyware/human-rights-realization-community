(function() {
    'use strict';

    angular
        .module('hrrc-app.utils')
        .filter('createUrl', CreateUrlFilter);

        function CreateUrlFilter() {
            return function(inputString) {
                return inputString.replace(/\s/g, '-').toLowerCase();
            }
        }

})();