ngDescribe({
    name: 'Contact',
    modules: ['hrrc-app.contact'],
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});