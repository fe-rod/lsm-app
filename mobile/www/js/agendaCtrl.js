angular.module('lsm')

.controller('AgendaCtrl', function($scope, $state, services, $ionicSideMenuDelegate, $localstorage) {

        /*function loadEvents(){
            services.loadJSON("http://lsmapp.azurewebsites.net/events.json")
                .then(function(data){
                    $scope.totalEvents = _.groupBy(data, "day");
                    $scope.events = $scope.totalEvents[0];
                })
        }*/
        
        function loadEvents(){
            
            var tempEvents = [];
            
            services.loadJSON("https://spreadsheets.google.com/feeds/list/1MXlqvZXIRfYdIo_QVw7-3kT2ZbJykFmENo2Pn4UZ6ZA/od6/public/values?alt=json")
                .then(function(data){
                    
                    _.map(data.feed.entry, function(item){
                        var event = {};
                        event.id = item.gsx$id.$t;
                        event.day = item.gsx$day.$t;
                        event.name = item.gsx$name.$t;
                        event.from = item.gsx$from.$t;
                        event.to = item.gsx$to.$t;
                        event.description = item.gsx$description.$t;
                        event.speaker = item.gsx$speaker.$t;
                        event.image = item.gsx$image.$t;
                        event.type = item.gsx$type.$t;
                    
                        event.timeString = event.from;
                        if(event.to)
                            event.timeString += " a " + event.to;
                    
                        tempEvents.push(event);
                        
                        $localstorage.setObject(event.id, event);
                    });
                    
                    $scope.totalEvents = _.groupBy(tempEvents, "day");
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
