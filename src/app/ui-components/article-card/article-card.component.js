(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .component('hrrcArticleCard', {
            templateUrl: '/human-rights-realization-community/build/ui-components/article-card/article-card.tpl.html',
            controller: 'ArticleCardController',
            bindings: {
                article: '<'
            }
        });

})();