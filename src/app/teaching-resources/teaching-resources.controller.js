(function() {

angular
    .module('hrrc-app.teaching-resources')
    .controller('TeachingResourcesController', TeachingResourcesController);

    TeachingResourcesController.$inject = ['$mdMedia', '$scope', 'bodyCopy', 'ArticleService', 'FirebaseService'];

    function TeachingResourcesController($mdMedia, $scope, bodyCopy, ArticleService, FirebaseService) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.teachingResources;

        vm.articleData = ArticleService.getAllArticles();

        vm.fbData = FirebaseService.getSyncedScopeObject($scope, 'fbData');

        return vm;
    };

})();