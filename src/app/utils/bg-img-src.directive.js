(function() {
    'use strict';

    angular
        .module('hrrc-app.utils')
        .directive('bgImgSrc', BackgroundImgSrcDirective);

        function BackgroundImgSrcDirective() {
            return {
                restrict: 'A',
                scope: {
                    bgImgSrc: '@'
                },
                link: function(scope, iElement) {
                    iElement[0].style='background-image: url(' + scope.bgImgSrc + ');';
                }
            };
        }

})();