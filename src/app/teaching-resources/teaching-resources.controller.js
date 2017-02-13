(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', 'bodyCopy'];

    function TeachingResourcesController($mdMedia, bodyCopy) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        return vm;
    };

})();