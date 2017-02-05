(function() {

angular
    .module('hrrc-app.home')
    .controller('HomeController', HomeController);

    function HomeController() {
        console.log('HomeController online');
    };

})();