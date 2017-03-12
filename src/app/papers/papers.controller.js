(function() {

angular
    .module('hrrc-app.papers')
    .controller('PapersController', PapersController);

    PapersController.$inject = ['$mdMedia', '$scope', 'bodyCopy', 'ArticleService'];

    function PapersController($mdMedia, $scope, bodyCopy, ArticleService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        ArticleService.syncArticlesToScope($scope).then(function() {
            vm.articles = $scope.articles;
        });

        return vm;
    };

})();