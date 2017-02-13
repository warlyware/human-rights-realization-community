(function() {

angular
    .module('hrrc-app.about')
    .controller('AboutController', AboutController);

    AboutController.$inject = ['$mdMedia'];

    function AboutController($mdMedia) {
        var vm = this;

        console.log('AboutController online');
        vm.$mdMedia = $mdMedia;

        return vm;
    };

})();