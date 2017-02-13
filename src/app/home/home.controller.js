(function() {

angular
    .module('hrrc-app.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$mdMedia', 'bodyCopy'];

    function HomeController($mdMedia, bodyCopy) {
        var vm = this;
        console.log(bodyCopy);

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.home;

        return vm;
    };

})();