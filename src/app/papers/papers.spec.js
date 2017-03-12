ngDescribe({
    name: 'Papers',
    modules: ['hrrc-app.papers'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});