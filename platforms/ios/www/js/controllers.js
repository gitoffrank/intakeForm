angular.module('starter.controllers', ['rzModule'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.logout = function(){
    $state.go('app.loginform');
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('LoginFormCtrl', function($scope, $stateParams, $state) {
  $scope.gotoMyForms = function(){
    $state.go('app.myforms');
  }

})

.controller('MyFormsCtrl', function($scope, $stateParams, $state) {
  $scope.gotoSelectPatientForm = function(){
    $state.go('app.select_patient_form');
  }
})

.controller('DoctorsCtrl', function($scope, $stateParams, $state) {
})

.controller('BookingsCtrl', function($scope, $stateParams, $state) {
})

.controller('MyProfileCtrl', function($scope, $stateParams, $state) {
})

.controller('HelpCtrl', function($scope, $stateParams, $state) {
})

.controller('SelectPatientFormCtrl', function($scope, $stateParams, $state) {
  $scope.gotoBasicInfoForm = function(){
    $state.go('app.basic_info_form');
  }
})

.controller('BasicInfoFormCtrl', function($scope, $stateParams, $state) {
  $scope.gotoFillFormStep = function(){
    $state.go('app.fill_form_step');
  }
})

.controller('FillFormStepCtrl', function($scope, $stateParams, $state) {

  $scope.painSlider = 10;
  $scope.gotoFillCompleted = function(){
    $state.go('app.fill_completed');
  }
})

.controller('FillCompletedCtrl', function($scope, $stateParams, $state) {
  $scope.gotoMyForms = function(){
    $state.go('app.myforms');
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
