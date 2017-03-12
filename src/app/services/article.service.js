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
                return dataStore.child(markdownRef + '.md').getDownloadURL().then(function(url) {
                    console.log(url);
                    return $http.get(url).then(function(response) {
                        return response.data;
                    }).catch(function(err) {
                        console.error(err);
                    });

                });
            }

            function getAllArticles() {
                return articles;
            }
        }

})();