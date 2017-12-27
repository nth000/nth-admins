(function () {
    angular.module('app.components.home')
        .config(Home);

    Home.$inject = ['$stateProvider'];
    function Home($stateProvider) {
        $stateProvider
            .state('index.home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                 ncyBreadcrumb: {
                label: 'Giới thiệu'
            }
            });
    }
})();
