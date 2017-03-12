(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', '$scope', 'bodyCopy', 'ArticleService'];

    function TeachingResourcesController($mdMedia, $scope, bodyCopy, ArticleService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        ArticleService.syncArticlesToScope($scope).then(function() {
            vm.articles = $scope.articles;
        });

        ArticleService.getArticleByRef('article1.md').then(function(article) {
            console.log(article);
        });

        return vm;
    };

})();