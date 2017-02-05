(function() {
    'use strict';

    angular
        .module('hrrc-app')
        .component('hrrcHeader', {
            templateUrl: 'components/header/header.tpl.html',
            controller: function() {console.log('header go'); }
        });

})();