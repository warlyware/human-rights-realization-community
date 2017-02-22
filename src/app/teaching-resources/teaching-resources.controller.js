(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', 'bodyCopy', 'ArticleService'];

    function TeachingResourcesController($mdMedia, bodyCopy, ArticleService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        vm.articleData = ArticleService.getAllArticles();
        return vm;
    };

})();