(function() {

angular
    .module('hrrc-app.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$mdMedia'];

    function HomeController($mdMedia) {
        var vm = this;

        console.log('HomeController online');
        vm.$mdMedia = $mdMedia;

        return vm;
    };

})();