(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ArticleService', ArticleService);

        ArticleService.$inject = ['articles'];

        function ArticleService(articles) {
            return {
                getArticle: getArticle
            }

            function getArticle(articleId) {
                angular.forEach(articles, function(val, key) {
                    console.log(val, key);
                });
            }
        }

})();