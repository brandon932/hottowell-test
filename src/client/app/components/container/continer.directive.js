(function() {
    'use strict';

    angular.module('app.components.container')
    .directive('gsContainer', containerDirective);

    function containerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/container/container.html',
            scope: {
                title: '@',
                color: '@'
            },
            controller: ContainerController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };
        function ContainerController() {

            var vm = this;

            vm.wColor = 'w' + vm.color;

        }
    }
}());
