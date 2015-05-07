angular.module('lsm')

    .controller('SpeakersCtrl', function($scope, services, $log) {
        function loadSpeakers(){
//            services.loadJSON("http://lsmapp.azurewebsites.net/speakers.json")
//                .then(function(data){
//                    $scope.speakers = data;
//                })
                
            $scope.speakers = [];
                
            services.loadJSON("https://spreadsheets.google.com/feeds/list/1MqMrbVThMLmgbGRscPg4sI4TY-K5sg8TZCYSNkKKUn0/od6/public/values?alt=json")
                .then(function(data){
                    
                    _.map(data.feed.entry, function(item){
                        var speaker = {};
                        speaker.name = item.gsx$mentor.$t;
                        speaker.longBio = item.gsx$bio.$t;
                        speaker.twitterId = "@" + item.gsx$twitterid.$t;
                        speaker.twitterUrl = "https://twitter.com/" + item.gsx$twitterid.$t;
                        speaker.image = item.gsx$image.$t;
                    
                        $scope.speakers.push(speaker);
                    });
                    
                })
        }
        
        
        
        

        loadSpeakers();
    });
