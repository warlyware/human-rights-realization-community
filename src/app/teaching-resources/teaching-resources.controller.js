(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia'];

    function TeachingResourcesController($mdMedia) {
        var vm = this;

        console.log('TeachingResourcesController online');
        vm.$mdMedia = $mdMedia;

        return vm;
    };

})();