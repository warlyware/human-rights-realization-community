(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = [];

        function FooterController() {
            var vm = this;

            function getHeaderHeight() {}

            return vm;
        }
})();