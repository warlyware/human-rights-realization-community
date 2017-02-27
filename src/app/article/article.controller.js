(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$stateParams', 'ArticleService'];

    function ArticleController($scope, $stateParams, ArticleService) {
        var vm = this;

        ArticleService.syncArticlesToScope($scope).then(function() {
            vm.article = $scope.articles[$stateParams.articleId];
        });

        return vm;
    };

})();