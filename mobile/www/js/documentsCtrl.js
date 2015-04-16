angular.module('lsm')

    .controller('DocumentsCtrl', function($scope, $cordovaInAppBrowser,$ionicPlatform) {
        $scope.documents = [
            {
                name: 'Experiment Board Tutorial - EN',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo porttitor suscipit.' +
                             ' Curabitur semper malesuada purus, non malesuada tellus facilisis ac',
                isDoc: true
            },
            {
                name: 'Experiment Board Tutorial - ES',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo porttitor suscipit.' +
                    ' Curabitur semper malesuada purus, non malesuada tellus facilisis ac',
                isDoc: true
            },
            {
                name: 'LSM Intro',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo porttitor suscipit.' +
                    ' Curabitur semper malesuada purus, non malesuada tellus facilisis ac',
                isDoc: true
            },
            {
                name: 'Extras',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo porttitor suscipit.' +
                    ' Curabitur semper malesuada purus, non malesuada tellus facilisis ac',
                isDoc: false
            },
            {
                name: 'Material complementario',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo porttitor suscipit.' +
                    ' Curabitur semper malesuada purus, non malesuada tellus facilisis ac',
                isDoc: false
            }
        ];

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
