(function() {

angular
    .module('hrrc-app.about')
    .controller('AboutController', AboutController);

    AboutController.$inject = ['$mdMedia', 'bodyCopy'];

    function AboutController($mdMedia, bodyCopy) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.about;

        return vm;
    };

})();