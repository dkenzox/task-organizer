(function(){
    'use strict'; 
    angular.module( 'gamesRessources', [
      'templates-app',
      'templates-common',
      'ui.router',
      'home',
      'about'
    ])

    .config(GamesRessourceConfig)

    .controller('GamesRessourcesController', GamesRessourcesController);

    GamesRessourceConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function GamesRessourceConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main', {
            abstract:true,
            views: {
                'header': {
                    templateUrl: 'parts/header.tpl.html'
                },
                'main': {
                    template: '<div></div>'
                },
                'footer': {
                    templateUrl: 'parts/footer.tpl.html'
                }
            }
        });
        $urlRouterProvider.otherwise( '/home' );
    }

    function GamesRessourcesController() {}

})();
