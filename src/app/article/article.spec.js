ngDescribe({
    name: 'Article',
    modules: ['hrrc-app.article'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});