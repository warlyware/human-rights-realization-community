(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .component('hrrcHeader', {
            templateUrl: 'components/header/header.tpl.html',
            controller: 'HeaderController',
        });

})();