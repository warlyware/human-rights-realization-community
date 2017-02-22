ngDescribe({
    name: 'Article Service',
    modules: ['hrrc-app.services'],
    inject: 'ArticleService',
    tests: function (deps) {

        describe('#getArticle', function() {

            it('should exist', function() {
                expect(deps.ArticleService.getArticle).toBeDefined();
            });

        })
    }
});