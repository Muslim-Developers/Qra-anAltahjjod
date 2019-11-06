angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'سورة البقرة ', id: 2 },
    { title: 'سورة ال عمران ', id: 3 },
	 { title: 'سورة النــساء ', id: 4 },
    { title: 'سورة الاسراء ', id: 17 },
    { title: 'سورة الكهف ', id: 18 },
    { title: 'سورة مريم ', id: 19 },
    { title: 'سوره طه ', id: 20 },
     
  ];
})
.controller('The17Ctrl', function($scope) {
 
    $scope.b7d8f9= function (){
        alert("hi from the first aya");
    }
    
  
})


.controller('The3Ctrl', function($scope) {
    
    $scope.d0e4fc= function (){
        alert("hi from the first context");
    }
    $scope.b4a4be= function (){
        alert("hi from the second context");
    }
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
