// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('lsm', ['ionic', 'ngCordova', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: ''
        });


        $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('app.agenda', {
    url: "/agenda",
    views: {
      'menuContent': {
        templateUrl: "templates/agenda.html",
          controller: 'AgendaCtrl'
      }
    }
  })
  .state('app.agenda-detail', {
        url: "/agenda-detail/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/agenda-detail.html",
                controller: 'AgendaDetailCtrl'
            }
        }
  })
  .state('app.speakers', {
      url: "/speakers",
      views: {
          'menuContent': {
              templateUrl: "templates/speakers.html",
              controller: 'SpeakersCtrl'
          }
      }
  })
      .state('app.mentors', {
          url: "/mentors",
          views: {
              'menuContent': {
                  templateUrl: "templates/mentors.html",
                  controller: 'MentorsCtrl'
              }
          }
      })
  .state('app.documents', {
      url: "/documents",
      views: {
          'menuContent': {
              templateUrl: "templates/documents.html",
              controller: 'DocumentsCtrl'
          }
      }
  })
  .state('app.venue', {
      url: "/venue",
      views: {
          'menuContent': {
              templateUrl: "templates/venue.html",
              controller: 'VenueCtrl'
          }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/agenda');
});
