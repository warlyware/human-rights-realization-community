(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['$mdSidenav', '$mdMedia'];

        function HeaderController($mdSidenav, $mdMedia) {
            var vm = this;

            vm.toggleSideNav = function() {
                $mdSidenav('side-nav').toggle();
            }

            vm.$mdMedia = $mdMedia;

            return vm;
        }
})();