(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('SideNavController', SideNavController);

        SideNavController.$inject = ['$mdSidenav'];

        function SideNavController($mdSidenav) {
            var vm = this;

            vm.closeSideNav = function() {
                $mdSidenav('side-nav').close();
            }

            return vm;
        }
})();