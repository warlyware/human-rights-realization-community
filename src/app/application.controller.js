(function() {

angular
    .module('seed-app')
    .controller('ApplicationController', ApplicationController);

    function ApplicationController() {
        console.log('ApplicationController online');
    };

})();