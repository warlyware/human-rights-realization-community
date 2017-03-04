(function() {

angular
    .module('hrrc-app.submissions')
    .controller('SubmissionsController', SubmissionsController);

    SubmissionsController.$inject = ['$mdMedia', 'bodyCopy'];

    function SubmissionsController($mdMedia, bodyCopy) {
        var vm = this;

        vm.$mdMedia = $mdMedia;
        vm.bodyCopy = bodyCopy.submissions;

        return vm;
    };

})();