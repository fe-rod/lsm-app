angular.module('lsm')

    .controller('MentorsCtrl', function($scope, $log, services) {

        function loadMentors(){
            services.loadJSON("http://lsmapp.azurewebsites.net/mentors.json")
                .then(function(data){
                    $scope.speakers = data;
                })
        }

        loadMentors();

    });
