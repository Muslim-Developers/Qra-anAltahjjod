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
	
	 $scope.fdf6da = function (){
        alert("92-94 Ayat");
    }
	
	$scope.dec7cb = function (){
        alert("95-97 Ayat");
    }
	
	$scope.e2d6e9 = function (){
        alert("98-101 Ayat");
    }
	
	$scope.b4cfae = function (){
        alert("102-109 Ayat");
    }
	
	$scope.b9a4bc = function (){
        alert("110-115 Ayat");
    }
	
	$scope.fbdbeb = function (){
        alert("116-117 Ayat");
    }
	
	$scope.cecad9 = function (){
        alert("118-120 Ayat");
    }
	
	$scope.fff9c2 = function (){
        alert("121-129 Ayat");
    }
	
	$scope.d29ea5 = function (){
        alert("130-132 Ayat");
    }
	
	$scope.d3dfd1 = function (){
        alert("133-136 Ayat");
    }
	
	$scope.d4cbdc = function (){
        alert("137-144 Ayat");
    }
	
	$scope.bca5c1 = function (){
        alert("145-148 Ayat");
    }
	
	$scope.c5b8ce = function (){
        alert("149-151 Ayat");
    }
	
	$scope.fbf3cc = function (){
        alert("152-155 Ayat");
    }
	
	$scope.b2a0b6 = function (){
        alert("156-158 Ayat");
    }
	
	$scope.a7d1af = function (){
        alert("159-160 Ayat");
    }
	
	$scope.d0e6d9 = function (){
        alert("161-163 Ayat");
    }
	
	$scope.f9eeb8 = function (){
        alert("164-165 Ayat");
    }
	
	$scope.f7f2dc = function (){
        alert("166-168 Ayat");
    }
	
	$scope.f4ebb1 = function (){
        alert("169-175 Ayat");
    }
	
	
	$scope.b8d5bd = function (){
        alert("176-180 Ayat");
    }
	
	$scope.cdc4d8 = function (){
        alert("181-184 Ayat");
    }
	
	$scope.ffa88e = function (){
        alert("185-186 Ayat");
    }
	
	$scope.fff7da = function (){
        alert("187-189 Ayat");
    }
	
	$scope.d5e4df = function (){
        alert("190-195 Ayat");
    }
	
	$scope.b5a2be = function (){
        alert("196-198 Ayat");
    }
	
	$scope.fdeeab = function (){
        alert("199-200 Ayat");
    }
})

.controller('The4Ctrl', function($scope) {
 
    $scope.d1c3d7= function (){
        alert("Aya 1");
    }
	
	 $scope.e3c5c5= function (){
        alert("2-6 Ayat");
    }
	
	 $scope.dca4a9= function (){
        alert("7-10 Ayat");
    }
	
	 $scope.dca4a9= function (){
        alert("7-10 Ayat");
    }
	
	$scope.dfc1c3= function (){
        alert("11-12 Ayat");
    }
	
	$scope.b3a0bc= function (){
        alert("13-14 Ayat");
    }
	
	$scope.d8a6a9= function (){
        alert("15-16 Ayat");
    }
	
	$scope.cbbfd5= function (){
        alert("17-18 Ayat");
    }
	
	$scope.e1c5c4= function (){
        alert("19-21 Ayat");
    }
	
	$scope.db9fa1= function (){
        alert("22-24 Ayat");
    }
	
	$scope.e6cac9= function (){
        alert("Aya 25");
    }
	
	$scope.c6aec9= function (){
        alert("26-28 Ayat");
    }
	
	$scope.dab0b7= function (){
        alert("29-30 Ayat");
    }
	
	$scope.dacee2= function (){
        alert("Aya 31");
    }
	
	$scope.bdadca= function (){
        alert("32-33 Ayat");
    }
	
	$scope.e3cdcd= function (){
        alert("34-35 Ayat");
    }
	
	$scope.ddeefd= function (){
        alert("36-40 Ayat");
    }
	
	$scope.ddeefd= function (){
        alert("36-40 Ayat");
    }
	
	$scope.f5b599= function (){
        alert("41-42 Ayat");
    }
	
	$scope.cc9fa2= function (){
        alert("Aya 43");
    }
	
	$scope.f5e4b8= function (){
        alert("44-46 Ayat");
    }
	
	$scope.fff8de= function (){
        alert("47-48 Ayat");
    }
	
	$scope.fbedbc= function (){
        alert("49-50 Ayat");
    }
	
	$scope.f8f0db= function (){
        alert("51-55 Ayat");
    }
	
	$scope.f6cadb= function (){
        alert("56-57 Ayat");
    }
	
	
	$scope.b2a1bc= function (){
        alert("58-59 Ayat");
    }
	
	$scope.f8eab9= function (){
        alert("60-63 Ayat");
    }
	
	$scope.d3c8e9= function (){
        alert("61-65 Ayat");
    }
	
	$scope.d3eada= function (){
        alert("66-70 Ayat");
    }
	
	$scope.baa1be= function (){
        alert("71-73 Ayat");
    }
	
	$scope.d0cbe1= function (){
        alert("74-76 Ayat");
    }
	
	$scope.fefbe8= function (){
        alert("75-79 Ayat");
    }
	
	$scope.fef0c3= function (){
        alert("80-84 Ayat");
    }
	
	$scope.c99ba5= function (){
        alert("85-87 Ayat");
    }
	
	$scope.b9aabf= function (){
        alert("88-89 Ayat");
    }
	
	$scope.dbcad2= function (){
        alert("90-91 Ayat");
    }
	
	$scope.dbafae= function (){
        alert("92-93 Ayat");
    }
	
	$scope.cec9df= function (){
        alert("Aya 94");
    }
	
	$scope.b3ccb7= function (){
        alert("95-96 Ayat");
    }
	
	$scope.fdf9de= function (){
        alert("97-100 Ayat");
    }
	
	$scope.e0c8c8= function (){
        alert("101-103 Ayat");
    }
	
	$scope.fcefbb= function (){
        alert("Aya 104");
    }
	
	$scope.b29ab3= function (){
        alert("Aya 105");
    }
	
	$scope.f4edd2= function (){
        alert("106-109 Ayat");
    }
	
	$scope.d3c7df= function (){
        alert("110-112 Ayat");
    }
	
	$scope.c1d9f5= function (){
        alert("Aya 113 ");
    }
	
	$scope.feefbd= function (){
        alert("114-115 Ayat");
    }
	
	$scope.f0b0cb= function (){
        alert("Aya 116");
    }
	
	$scope.bba4c2= function (){
        alert("117-121 Ayat");
    }
	
	$scope.dde8e2= function (){
        alert("122-126 Ayat");
    }
	
	$scope.d6a1a7= function (){
        alert("Aya 127");
    }
	
	$scope.e2c6c8= function (){
        alert("128-130 Ayat");
    }
	
	$scope.e1f3fd= function (){
        alert("131-134 Ayat");
    }
	
	$scope.baaac4= function (){
        alert("135-136 Ayat");
    }
	
	$scope.fed5e3= function (){
        alert("137-139 Ayat");
    }
	
	$scope.fdf2d6= function (){
        alert("140-143 Ayat");
    }
	
	$scope.ebadc4= function (){
        alert("144-145 Ayat");
    }
	
	$scope.d4c9da= function (){
        alert("146-147 Ayat");
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
