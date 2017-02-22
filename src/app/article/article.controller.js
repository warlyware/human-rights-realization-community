(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = [];

    function ArticleController() {
        var vm = this;

        console.log('ArticleCtrl online');

        return vm;
    };

})();