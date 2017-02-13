(function() {

angular
    .module('hrrc-app')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['bodyCopy'];

    function ApplicationController(bodyCopy) {
        console.log('ApplicationController online');
        console.log(bodyCopy);
    };

})();