angular.module('lsm')

.controller('AgendaDetailCtrl', function($scope, $stateParams, services) {

        function loadEvents(){
            services.loadJSON("http://lsmapp.azurewebsites.net/events.json")
                .then(function(data){
                    $scope.event = data[$stateParams.id];
                })
        }

        loadEvents();

});
