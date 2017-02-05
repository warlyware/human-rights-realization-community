ngDescribe({
    name: 'Application',
    modules: ['seed-app', 'ui.router', 'ngMaterial'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});