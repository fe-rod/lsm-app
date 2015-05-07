angular.module('lsm')

    .controller('DocumentsCtrl', function($scope, $cordovaInAppBrowser,$ionicPlatform, services) {

        function loadDocuments(){
            services.loadJSON("http://lsmapp.azurewebsites.net/documents.json")
                .then(function(data){
                    $scope.documents = data;
                })
        }

        loadDocuments();

        $scope.openLink = function(doc){
            var options = {
                location: 'yes',
                toolbar: 'no'
            };

            $ionicPlatform.ready(function() {
                $cordovaInAppBrowser.open("http://www.kimhartman.se/wp-content/uploads/2013/10/the-lean-startup-summary.pdf", '_system', options)
                    .then(function(event) {
                        // success
                    })
                    .catch(function(event) {
                        // error
                    });
            });

        }
    });
