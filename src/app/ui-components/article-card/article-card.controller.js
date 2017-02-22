(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = ['$filter', 'ArticleService'];

        function ArticleCardController($filter, ArticleService) {
            var vm = this;


            console.log(vm.article);
            vm.articleId = $filter('createUrl')(ArticleService.getAllArticles()[0].title);

            return vm;
        }
})();