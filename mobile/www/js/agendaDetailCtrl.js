angular.module('lsm')

.controller('AgendaDetailCtrl', function($scope, $stateParams, services, $localstorage) {

        function loadEvent(){
            $scope.event = $localstorage.getObject($stateParams.id);
        }

        loadEvent();

});
