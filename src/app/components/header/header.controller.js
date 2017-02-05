(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['$mdMedia', '$state'];

        function HeaderController($mdMedia, $state) {
            var vm = {};

            vm.$mdMedia = $mdMedia;

            return vm;
        }
})();