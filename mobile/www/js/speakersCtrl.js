angular.module('lsm')

    .controller('SpeakersCtrl', function($scope, services) {
        function loadSpeakers(){
            services.loadJSON("./data/speakers.json")
                .then(function(data){
                    $scope.speakers = data;
                })
        }

        loadSpeakers();
    });
