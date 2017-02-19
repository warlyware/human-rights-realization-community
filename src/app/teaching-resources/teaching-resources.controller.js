(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', 'bodyCopy', 'articles'];

    function TeachingResourcesController($mdMedia, bodyCopy, articles) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        vm.articleData = articles;
        return vm;
    };

})();