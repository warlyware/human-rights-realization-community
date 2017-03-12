(function() {
    'use strict';

    angular
        .module('hrrc-app.ui-components')
        .component('hrrcArticleCard', {
            templateUrl: 'ui-components/article-card/article-card.tpl.html',
            controller: 'ArticleCardController',
            bindings: {
                article: '='
            }
        });

})();