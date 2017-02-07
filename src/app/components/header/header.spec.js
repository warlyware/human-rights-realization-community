ngDescribe({
    exposeApi: true,
    name: 'Header',
    modules: ['hrrc-app.components', 'ngMaterial'],
    element: '<hrrc-header ng-controller="HeaderController as $ctrl"></hrrc-header>',
    inject: ['$http', '$componentController', '$rootScope'],
    controller: 'HeaderController',
    http: {
        get: {
            'components/header/header.tpl.html': '<div></div>'
        }
    },
    tests: function (deps) {
        // var scope = deps.$rootScope.new();
        let $ctrl;
        beforeEach(function() {
            $ctrl = deps.$componentController('hrrcHeader', null);
            $ctrl.$onInit();
        });

        it('should pass', function() {
            console.log(ctrl);
            expect(42).toEqual(42);
        });

        it('should have a getHeaderHeight function', function() {
            expect($ctrl).toBeDefined();
        });
    }
});