(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['$mdSidenav'];

        function HeaderController($mdSidenav) {
            var vm = this;

            vm.toggleSideNav = function() {
                $mdSidenav('side-nav').toggle();
            }

            return vm;
        }
})();