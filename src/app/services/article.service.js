(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ArticleService', ArticleService);

        ArticleService.$inject = ['$http', 'articles', 'FirebaseService'];

        function ArticleService($http, articles, FirebaseService) {
            return {
                getArticleByRef: getArticleByRef,
                getAllArticles: getAllArticles,
                syncArticlesToScope: syncArticlesToScope
            }

            function syncArticlesToScope(scope) {
                return FirebaseService.getSyncedScopeObject(scope, 'articles', 'articles');
            }

            function getArticleByRef(markdownRef) {
                var dataStore = FirebaseService.getDataStore();
                return dataStore.child(markdownRef).getDownloadURL().then(function(url) {
                    console.log(url);
                    return $http.get(url, function(data) {
                        return data;
                    });
                });
            }

            function getAllArticles() {
                return articles;
            }
        }

})();