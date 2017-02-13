(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['$mdMedia'];

        function HeaderController($mdMedia) {
            var vm = this;

            vm.$mdMedia = $mdMedia;

            function getHeaderHeight() {}

            return vm;
        }
})();