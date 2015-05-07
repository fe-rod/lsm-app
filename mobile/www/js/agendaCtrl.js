angular.module('lsm')

.controller('AgendaCtrl', function($scope, $state, services, $ionicSideMenuDelegate) {

        function loadEvents(){
            services.loadJSON("http://lsmapp.azurewebsites.net/events.json")
                .then(function(data){
                    $scope.totalEvents = _.groupBy(data, "day");
                    $scope.events = $scope.totalEvents[0];
                })
        }

        loadEvents();

        $scope.day = 0;

        $scope.selectDay = function(day){
            $scope.events = $scope.totalEvents[day];
            $scope.day = day;
        }

        $scope.viewDetail = function(id){
            $state.go("app.agenda-detail", {id: id})
        }
});
