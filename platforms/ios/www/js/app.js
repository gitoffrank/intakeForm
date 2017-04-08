// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.loginform', {
      url: '/loginform',
      views: {
        'menuContent': {
          templateUrl: 'templates/loginform.html',
          controller: 'LoginFormCtrl'
        }
      }
    })

  .state('app.myforms', {
      url: '/myforms',
      views: {
        'menuContent': {
          templateUrl: 'templates/myforms.html',
          controller: 'MyFormsCtrl'
        }
      }
    })

  .state('app.doctors', {
      url: '/doctors',
      views: {
        'menuContent': {
          templateUrl: 'templates/doctors.html',
          controller: 'DoctorsCtrl'
        }
      }
    })

  .state('app.bookings', {
      url: '/bookings',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookings.html',
          controller: 'BookingsCtrl'
        }
      }
    })

  .state('app.myprofile', {
      url: '/myprofile',
      views: {
        'menuContent': {
          templateUrl: 'templates/myprofile.html',
          controller: 'MyProfileCtrl'
        }
      }
    })

  .state('app.help', {
      url: '/help',
      views: {
        'menuContent': {
          templateUrl: 'templates/help.html',
          controller: 'HelpCtrl'
        }
      }
    })

  .state('app.select_patient_form', {
      url: '/select_patient_form',
      views: {
        'menuContent': {
          templateUrl: 'templates/select_patient_form.html',
          controller: 'SelectPatientFormCtrl'
        }
      }
    })

  .state('app.basic_info_form', {
      url: '/basic_info_form',
      views: {
        'menuContent': {
          templateUrl: 'templates/basic_info_form.html',
          controller: 'BasicInfoFormCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/loginform');
});
