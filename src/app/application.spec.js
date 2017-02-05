ngDescribe({
    name: 'Application',
    modules: ['hrrc-app', 'ui.router', 'ngMaterial', 'hrrc-app.routes', 'hrrc-app.home'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});