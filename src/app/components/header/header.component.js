(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .component('hrrcHeader', {
            templateUrl: '/human-rights-realization-community/build/components/header/header.tpl.html',
            controller: 'HeaderController',
        });

})();