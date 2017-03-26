(function() {

angular
    .module('hrrc-app.papers')
    .controller('PapersController', PapersController);

    PapersController.$inject = ['$mdMedia', '$scope', 'bodyCopy', 'ApiService', 'ArticleService'];

    function PapersController($mdMedia, $scope, bodyCopy, ApiService, ArticleService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;
        var data;

        ApiService.getPosts().then(function(data) {
            data = data;
            console.log(data);
        });

        ArticleService.syncArticlesToScope($scope).then(function() {
            vm.articles = $scope.articles;
        });

        return vm;
    };

})();