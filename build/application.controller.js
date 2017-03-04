(function() {

angular
    .module('hrrc-app')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$mdMedia'];

    function ApplicationController($mdMedia) {
        var vm = this;

        vm.$mdMedia = $mdMedia;

        return vm;
    };

})();