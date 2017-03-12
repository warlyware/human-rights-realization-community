(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = ['$state'];

        function ArticleCardController($state) {
            var vm = this;

            vm.goToArticle = function() {
                $state.go('article', {mdRef: vm.article.mdRef});
            }

            return vm;
        }
})();