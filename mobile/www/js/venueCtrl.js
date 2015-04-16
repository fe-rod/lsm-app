angular.module('lsm')

.controller('VenueCtrl', function($scope, $compile) {

     function initialize() {
        var myLatlng = new google.maps.LatLng(-34.878905,-56.079139);

        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            zoomControl: false,
            mapTypeControl: false
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
            content: compiled[0]
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Ingenio, Los Naranjos'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        $scope.map = map;
    }

    initialize()

    //google.maps.event.addDomListener(window, 'load', initialize);


});
