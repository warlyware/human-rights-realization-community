(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$timeout', '$stateParams', 'ArticleService'];

    function ArticleController($scope, $timeout, $stateParams, ArticleService) {
        var vm = this;
        vm.article = {};

        ArticleService.getArticleByRef($stateParams.mdRef).then(function(data) {
            vm.article.body = data;
            $scope.$apply();
        });

        return vm;
    };

})();