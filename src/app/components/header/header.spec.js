ngDescribe({
    exposeApi: true,
    name: 'Header',
    modules: ['hrrc-app.components', 'ngMaterial'],
    element: '<hrrc-header ng-controller="HeaderController as $ctrl"></hrrc-header>',
    inject: ['$http', '$componentController'],
    http: {
        get: {
            'components/header/header.tpl.html': '<div></div>'
        }
    },
    tests: function (deps) {
        it('should pass', function() {
            expect(42).toEqual(42);
        });
    }
});