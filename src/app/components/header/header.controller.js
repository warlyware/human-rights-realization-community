(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = [];

        function HeaderController() {
            var vm = {};

            function getHeaderHeight() {}

            return vm;
        }
})();