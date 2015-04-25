angular.module('lsm')

.controller('AgendaDetailCtrl', function($scope, $stateParams, services) {

        function loadEvents(){
            services.loadJSON("./data/events.json")
                .then(function(data){
                    $scope.event = data[$stateParams.id];
                })
        }

        loadEvents();

});
