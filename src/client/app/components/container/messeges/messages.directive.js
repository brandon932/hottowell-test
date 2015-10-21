(function() {
    'use strict';

    angular.module('app.components.messages')
    .directive('gsMessages', messagesDirective);

    function messagesDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/messages/messages.html',
            scope: {},
            controller: MessagesController,
            controllerAs: 'vm',
            bindToController: true,
        };
    }

    MessagesController.$inject = ['dataservice', 'logger'];

    function MessagesController(dataservice, logger){
        var vm = this;
        vm.messageCount = 0;

        vm.activate = activate;

        function activate() {
            getMessageCount();
        }

        function getMessageCount() {
            return dataservice.getMessageCount()
            .then(function (data) {
                vm.messageCount = data;
                logger.info('Activated Messages View');
                return vm.messageCount;
            });
        }

    }
}());
