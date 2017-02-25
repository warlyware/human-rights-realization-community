angular
    .module('hrrc-app', [
        'ui.router',
        'ngMaterial',
        'firebase',
        'hrrc-app.routes',
        'hrrc-app.utils',
        'hrrc-app.services',
        'hrrc-app.body-copy',
        'hrrc-app.ui-components',
        'hrrc-app.components',
        'hrrc-app.home',
        'hrrc-app.about',
        'hrrc-app.article',
        'hrrc-app.submissions',
        'hrrc-app.contact',
        'hrrc-app.teaching-resources'
    ]);