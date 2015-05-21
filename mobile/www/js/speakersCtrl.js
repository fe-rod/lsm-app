angular.module('lsm')

    .controller('SpeakersCtrl', function($scope, services, $log, $cordovaInAppBrowser,$ionicLoading) {
        function loadSpeakers(){
//            services.loadJSON("http://lsmapp.azurewebsites.net/speakers.json")
//                .then(function(data){
//                    $scope.speakers = data;
//                })
                
            $ionicLoading.show();
            
            $scope.speakers = [];
                
            services.loadJSON("https://spreadsheets.google.com/feeds/list/1MqMrbVThMLmgbGRscPg4sI4TY-K5sg8TZCYSNkKKUn0/od6/public/values?alt=json")
                .then(function(data){
                    
                    _.map(data.feed.entry, function(item){
                        var speaker = {};
                        speaker.name = item.gsx$mentor.$t;
                        speaker.longBio = item.gsx$bio.$t;
                        speaker.twitterId = "@" + item.gsx$twitterid.$t;
                        speaker.hasTwitter = false;
                        if(item.gsx$twitterid.$t)
                            speaker.hasTwitter = true;
                        speaker.image = item.gsx$image.$t;
                    
                        $scope.speakers.push(speaker);
                    });
                    
                    $ionicLoading.hide();
                    
                })
        }
        
        loadSpeakers();
        
        $scope.openTwitter = function (speaker) {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
        
            $cordovaInAppBrowser.open('https://twitter.com/' + speaker.twitterId, '_system', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
                });
        };
    });
