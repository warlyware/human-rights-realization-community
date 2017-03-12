(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .controller('ArticleCardController', ArticleCardController);

        ArticleCardController.$inject = ['$state'];

        function ArticleCardController($state) {
            var vm = this;

            return vm;
        }
})();