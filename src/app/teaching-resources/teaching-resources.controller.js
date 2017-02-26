(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', '$scope', 'bodyCopy', 'ArticleService'];

    function TeachingResourcesController($mdMedia, $scope, bodyCopy, ArticleService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        // vm.articleData = ArticleService.getAllArticles();

        ArticleService.syncArticles($scope).then(function() {
            console.log($scope.articles);
            vm.articles = $scope.articles;
        });

        return vm;
    };

})();