ngDescribe({
    name: 'About',
    modules: ['hrrc-app', 'ngMaterial'],
    controllers: 'ApplicationController',
    tests: function (deps) {

        it('should pass', function() {
            expect(42).toEqual(42);
        });

    }
});