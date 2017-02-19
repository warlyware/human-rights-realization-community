(function() {
    'use strict';

    angular
        .module('hrrc-app.utils')
        .directive('replaceWithTemplate', ReplaceWithTemplateDirective);

        function ReplaceWithTemplateDirective() {
            return {
                replace: true,
                restrict: 'A',
                templateUrl: function(iElement, iAttrs) {
                    return iAttrs.replaceWithTemplate;
                }
            };
        }

})();