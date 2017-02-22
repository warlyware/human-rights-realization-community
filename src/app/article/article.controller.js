(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['ArticleService'];

    function ArticleController(ArticleService) {
        var vm = this;

        console.log('ArticleCtrl online');

        return vm;
    };

})();