ngDescribe({
    name: 'About',
    modules: ['hrrc-app.about'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});