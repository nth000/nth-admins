(function () {
    angular.module('app.components.monitor')
        .config(Monitor);

    Monitor.$inject = ['$stateProvider'];
    function Monitor($stateProvider) {
        $stateProvider
            .state('index.monitor', {
                url: '/monitor',
                templateUrl: 'app/components/monitor/monitor.html',
                controller: 'MonitorController',
                controllerAs: 'vm',
                 ncyBreadcrumb: {
                label: 'Giám sát'
            }
            });
    }
})();