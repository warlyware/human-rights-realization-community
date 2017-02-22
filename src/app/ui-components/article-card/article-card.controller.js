(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = ['$filter'];

        function ArticleCardController($filter) {
            var vm = this;

            vm.articleId = $filter('createUrl')(vm.article.title);

            return vm;
        }
})();