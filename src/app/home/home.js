(function() {
    'use strict';
    angular.module( 'home', [])

    .config(HomeConfig)

    .controller('HomeController', HomeController);

    HomeConfig.$inject = ['$stateProvider'];

    function HomeConfig($stateProvider) {
        $stateProvider.state( 'home', {
            parent: 'main',
            url: '/home',
            views: {
                "main@": {
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    }

    function HomeController() {

    }
})();