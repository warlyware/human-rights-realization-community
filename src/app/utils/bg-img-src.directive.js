(function() {
    'use strict';

    angular
        .module('hrrc-app.utils')
        .directive('bgImgSrc', BackgroundImgSrcDirective);

        function BackgroundImgSrcDirective() {
            return {
                restrict: 'A',
                template: function(iElement, iAttrs) {
                    console.log(iAttrs);
                    iElement[0].style='background-image: url(' + iAttrs.bgImgSrc + ');';
                }
            };
        }

})();