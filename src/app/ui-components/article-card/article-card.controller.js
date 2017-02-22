(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = ['$filter', 'ArticleService'];

        function ArticleCardController($filter, ArticleService) {
            var vm = this;

            vm.articleId = $filter('createUrl')(vm.article.title);

            return vm;
        }
})();