(function() {
    'use strict';
    angular.module( 'about', [])

    .config(AboutConfig)

    .controller('AboutController', AboutController);


    AboutConfig.$inject = ['$stateProvider'];

    function AboutConfig($stateProvider) {
        $stateProvider.state( 'about', {
            parent: 'main',
            url: '/about',
            views: {
                "main@": {
                    controller: 'AboutController',
                    controllerAs: 'vm',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'What is It?' }
        });
    }

    AboutController.$inject = [''];

    function AboutController() {
        var vm = this;
        vm.dropdownDemoItems = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
        ];
    }

})();
