ngDescribe({
    name: 'Home',
    modules: ['seed-app.home'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});