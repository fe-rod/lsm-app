angular.module('lsm')

    .controller('DocumentsCtrl', function($scope, $cordovaInAppBrowser,$ionicPlatform, services) {

        var options = {
            location: 'yes',
            clearcache: 'yes',
            toolbar: 'no'
        };

        $scope.dropbox_links = function () {
            $cordovaInAppBrowser.open('https://drive.google.com/folderview?id=0BzlBFIXJEvEOflg2WmhNYzhyd1NiSHJNNUJsOXZ3ZTRidWVDSDBxYXQ0Y2VCM1F5TlVOR0U&usp=sharing', '_system', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
                });
        };

        $scope.drive_links = function () {
            $cordovaInAppBrowser.open('https://drive.google.com/folderview?id=0BzlBFIXJEvEOflg2WmhNYzhyd1NiSHJNNUJsOXZ3ZTRidWVDSDBxYXQ0Y2VCM1F5TlVOR0U&usp=sharing', '_system', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
                });
        };
    });
