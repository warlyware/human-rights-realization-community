ngDescribe({
    name: 'Home',
    modules: ['hrrc-app.home'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});