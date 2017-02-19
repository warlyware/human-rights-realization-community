(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = [];

        function ArticleCardController() {
            var vm = this;

            console.log('article card alive');

            return vm;
        }
})();