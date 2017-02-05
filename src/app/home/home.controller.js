(function() {

angular
    .module('seed-app.home')
    .controller('HomeController', HomeController);

    function HomeController() {
        console.log('HomeController online');
    };

})();