/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: peopleGrid', function() {
        var element,
        vm,
        people = mockData.getMockPeople();

        beforeEach(function() {
            bard.appModule('app.components.peopleGrid');
            bard.inject(
                '$q',
                '$compile',
                '$rootScope',
                '$state',
                '$templateCache',
                '$log',
                'dataservice'
            );
            sinon.stub(dataservice, 'getPeople').returns($q.when(people));
        });

        beforeEach(function() {
            var html = angular.element('<gs-people-grid></gs-people-grid>');

            $rootScope = $rootScope.$new();
            $templateCache.put('app/components/peopleGrid/peopleGrid.html', '');
            element = $compile(html)($rootScope);

            $rootScope.$digest(element);

            vm = element.controller('gsPeopleGrid');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('is able to be created', function() {
            expect(element).to.be.defined;
            expect(vm).to.be.defined;
        });
        describe('after activate', function() {

            beforeEach(function() {
                vm.activate();
                $rootScope.$apply();
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have at least 1 person', function () {
                expect(vm.people).to.have.length.above(0);
            });

            it('should have people count of 5', function () {
                expect(vm.people).to.have.length(7);
            });
        });
    });
})();
