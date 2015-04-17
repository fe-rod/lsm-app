angular.module('lsm')

.controller('VenueCtrl', function($scope) {

        initMap();

        function initMap(){
            $scope.map = {
                center: { latitude: -34.878905, longitude: -56.079139 },
                zoom: 15,
                options: {zoomControl: false, streetViewControl: false}
             };
            $scope.marker = {id: "ingenio",coords: { latitude: -34.878905, longitude: -56.079139 }};
        }

});
