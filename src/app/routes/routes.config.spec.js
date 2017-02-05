ngDescribe({
    name: 'Routes',
    modules: ['seed-app.routes', 'ui.router'],
    inject: ['$state'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});