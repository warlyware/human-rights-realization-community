(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        function HeaderController() {
            console.log('HeaderController go');
        }
})();