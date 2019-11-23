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


.controller('The3Ctrl', function($scope, $ionicModal) {
	
	$scope.note = " ";
	$scope.addNesDesc = function(key,data) {
		alert(key);
		alert(data);
		localStorage.setItem(key,data);
		$scope.modal.hide();
	};
	
	$ionicModal
	.fromTemplateUrl('templates/modal.html',{
		scope: $scope
	})
	.then( function (modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal =function() {
		$scope.modal.show();
	};
	
	$scope.closeModal =function() {
		$scope.modal.hide();
	};
	
	//function open the modal
	
    $scope.d0e4fc= function (){
		$scope.key = "d0e4fc";
		$scope.note = localStorage.getItem("d0e4fc"); // take the data from local storage
		$scope.openModal();
    };
	
	 $scope.b4a4be= function (){
		 
		$scope.key = "b4a4be";
		$scope.note = localStorage.getItem("b4a4be"); 
		$scope.openModal();
    };
	
	$scope.fdf6da = function (){
		$scope.key = "fdf6da";
		$scope.note = localStorage.getItem("fdf6da"); 
		$scope.openModal();  
    };
	
	$scope.dec7cb = function (){
		$scope.key = "dec7cb";
		$scope.note = localStorage.getItem("dec7cb"); 
		$scope.openModal();  
    };
	
	$scope.e2d6e9 = function (){
		$scope.key = "e2d6e9";
		$scope.note = localStorage.getItem("e2d6e9"); 
		$scope.openModal();  
    };
	
	$scope.b4cfae = function (){
		$scope.key = "b4cfae";
		$scope.note = localStorage.getItem("b4cfae"); 
		$scope.openModal();
    };
	
	$scope.b9a4bc = function (){
		$scope.key = "b9a4bc";
		$scope.note = localStorage.getItem("b9a4bc"); 
		$scope.openModal();
    };

	$scope.fbdbeb = function (){
		$scope.key = "fbdbeb";
		$scope.note = localStorage.getItem("fbdbeb"); 
		$scope.openModal();
    };
		
	$scope.cecad9 = function (){
		$scope.key = "cecad9";
		$scope.note = localStorage.getItem("cecad9"); 
		$scope.openModal();
    };
	
	$scope.fff9c2 = function (){
		$scope.key = "fff9c2";
		$scope.note = localStorage.getItem("fff9c2"); 
		$scope.openModal();
    };

	$scope.d29ea5 = function (){
		$scope.key = "d29ea5";
		$scope.note = localStorage.getItem("d29ea5"); 
		$scope.openModal();
    };

	$scope.d3dfd1 = function (){
		$scope.key = "d3dfd1";
		$scope.note = localStorage.getItem("d3dfd1"); 
		$scope.openModal();
    };
	$scope.d4cbdc = function (){
		$scope.key = "d4cbdc";
		$scope.note = localStorage.getItem("d4cbdc"); 
		$scope.openModal();
    };
	
	$scope.bca5c1 = function (){
		$scope.key = "bca5c1";
		$scope.note = localStorage.getItem("bca5c1"); 
		$scope.openModal();
    };
	
	$scope.c5b8ce = function (){
		$scope.key = "c5b8ce";
		$scope.note = localStorage.getItem("c5b8ce"); 
		$scope.openModal();
    };
	
	$scope.fbf3cc = function (){
		$scope.key = "fbf3cc";
		$scope.note = localStorage.getItem("fbf3cc"); 
		$scope.openModal();
    };

	$scope.b2a0b6 = function (){
		$scope.key = "b2a0b6";
		$scope.note = localStorage.getItem("b2a0b6"); 
		$scope.openModal();
    };
	
	$scope.a7d1af = function (){
		$scope.key = "a7d1af";
		$scope.note = localStorage.getItem("a7d1af"); 
		$scope.openModal();
    }
	
	$scope.d0e6d9 = function (){
		$scope.key = "d0e6d9";
		$scope.note = localStorage.getItem("d0e6d9"); 
		$scope.openModal();
    }
	
	$scope.f9eeb8 = function (){
		$scope.key = "f9eeb8";
		$scope.note = localStorage.getItem("f9eeb8"); 
		$scope.openModal();
    }
	
	$scope.f7f2dc = function (){
		$scope.key = "f7f2dc";
		$scope.note = localStorage.getItem("f7f2dc"); 
		$scope.openModal();
   
    }

	$scope.f4ebb1 = function (){
		$scope.key = "f4ebb1";
		$scope.note = localStorage.getItem("f4ebb1"); 
		$scope.openModal();
    }
	
	
	$scope.b8d5bd = function (){
		$scope.key = "b8d5bd";
		$scope.note = localStorage.getItem("b8d5bd"); 
		$scope.openModal();
        
    }

	$scope.cdc4d8 = function (){
		$scope.key = "cdc4d8";
		$scope.note = localStorage.getItem("cdc4d8"); 
		$scope.openModal();
    };
	$scope.ffa88e = function (){
		$scope.key = "ffa88e";
		$scope.note = localStorage.getItem("ffa88e"); 
		$scope.openModal();
    }
	
	$scope.fff7da = function (){
		$scope.key = "fff7da";
		$scope.note = localStorage.getItem("fff7da"); 
		$scope.openModal();
    }
	
	$scope.d5e4df = function (){
		$scope.key = "d5e4df";
		$scope.note = localStorage.getItem("d5e4df"); 
		$scope.openModal();
    }
	
	$scope.b5a2be = function (){
		$scope.key = "b5a2be";
		$scope.note = localStorage.getItem("b5a2be"); 
		$scope.openModal();
       
    }
	
	$scope.fdeeab = function (){
		$scope.key = "fdeeab";
		$scope.note = localStorage.getItem("fdeeab"); 
		$scope.openModal();
       
    }
})

.controller('The4Ctrl', function($scope, $ionicModal) {
	
	$scope.note = " ";
	$scope.addNesDesc = function(key,data) {
		alert(key);
		alert(data);
		localStorage.setItem(key,data);
		$scope.modal.hide();
	};
	
	$ionicModal
	.fromTemplateUrl('templates/modal.html',{
		scope: $scope
	})
	.then( function (modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal =function() {
		$scope.modal.show();
	};
	
	$scope.closeModal =function() {
		$scope.modal.hide();
	};
	
	//function open the modal
	
	$scope.d1c3d7 = function (){
		$scope.key = "d1c3d7";
		$scope.note = localStorage.getItem("d1c3d7"); 
		$scope.openModal(); 
    };

	
	 $scope.e3c5c5= function (){
       $scope.key = "e3c5c5";
		$scope.note = localStorage.getItem("e3c5c5"); 
		$scope.openModal(); 
    }
	
	 $scope.dca4a9= function (){
        $scope.key = "dca4a9";
		$scope.note = localStorage.getItem("dca4a9"); 
		$scope.openModal();
    }
	
	$scope.dfc1c3= function (){
        $scope.key = "dfc1c3";
		$scope.note = localStorage.getItem("dfc1c3"); 
		$scope.openModal();
    }
	
	$scope.b3a0bc= function (){
       $scope.key = "b3a0bc";
		$scope.note = localStorage.getItem("b3a0bc"); 
		$scope.openModal();
    }
	
	$scope.d8a6a9= function (){
       $scope.key = "d8a6a9";
		$scope.note = localStorage.getItem("d8a6a9"); 
		$scope.openModal();
    }
	
	$scope.cbbfd5= function (){
        $scope.key = "cbbfd5";
		$scope.note = localStorage.getItem("cbbfd5"); 
		$scope.openModal();
    }
	
	$scope.e1c5c4= function (){
        $scope.key = "e1c5c4";
		$scope.note = localStorage.getItem("e1c5c4"); 
		$scope.openModal();
    }
	
	$scope.db9fa1= function (){
		$scope.key = "db9fa1";
		$scope.note = localStorage.getItem("db9fa1"); 
		$scope.openModal();
    }
	
	$scope.e6cac9= function (){
	   $scope.key = "e6cac9";
		$scope.note = localStorage.getItem("e6cac9"); 
		$scope.openModal();
    }
	
	$scope.c6aec9= function (){
        $scope.key = "c6aec9";
		$scope.note = localStorage.getItem("c6aec9"); 
		$scope.openModal();
    }
	
	$scope.dab0b7= function (){
        $scope.key = "dab0b7";
		$scope.note = localStorage.getItem("dab0b7"); 
		$scope.openModal();
    }
	
	$scope.dacee2= function (){
        $scope.key = "dacee2";
		$scope.note = localStorage.getItem("dacee2"); 
		$scope.openModal();
    }
	
	$scope.bdadca= function (){
        $scope.key = "bdadca";
		$scope.note = localStorage.getItem("bdadca"); 
		$scope.openModal();
    }
	
	$scope.e3cdcd= function (){
        $scope.key = "e3cdcd";
		$scope.note = localStorage.getItem("e3cdcd"); 
		$scope.openModal();
    }
	
	$scope.ddeefd= function (){
        $scope.key = "ddeefd";
		$scope.note = localStorage.getItem("ddeefd"); 
		$scope.openModal();
    }
	
	
	
	$scope.f5b599= function (){
        $scope.key = "f5b599";
		$scope.note = localStorage.getItem("f5b599"); 
		$scope.openModal();
    }
	
	$scope.cc9fa2= function (){
        $scope.key = "cc9fa2";
		$scope.note = localStorage.getItem("cc9fa2"); 
		$scope.openModal();
    }
	
	$scope.f5e4b8= function (){
        $scope.key = "f5e4b8";
		$scope.note = localStorage.getItem("f5e4b8"); 
		$scope.openModal();
    }
	
	$scope.fff8de= function (){
        $scope.key = "fff8de";
		$scope.note = localStorage.getItem("fff8de"); 
		$scope.openModal();
    }
	
	$scope.fbedbc= function (){
        $scope.key = "fbedbc";
		$scope.note = localStorage.getItem("fbedbc"); 
		$scope.openModal();
    }
	
	$scope.f8f0db= function (){
       $scope.key = "f8f0db";
		$scope.note = localStorage.getItem("f8f0db"); 
		$scope.openModal();
    }
	
	$scope.f6cadb= function (){
        $scope.key = "f6cadb";
		$scope.note = localStorage.getItem("f6cadb"); 
		$scope.openModal();
    }
	
	
	$scope.b2a1bc= function (){
        $scope.key = "b2a1bc";
		$scope.note = localStorage.getItem("b2a1bc"); 
		$scope.openModal();
    }
	
	$scope.f8eab9= function (){
        $scope.key = "f8eab9";
		$scope.note = localStorage.getItem("f8eab9"); 
		$scope.openModal();
    }
	
	$scope.d3c8e9= function (){
        $scope.key = "d3c8e9";
		$scope.note = localStorage.getItem("d3c8e9"); 
		$scope.openModal();
    }
	
	$scope.d3eada= function (){
        $scope.key = "d3eada";
		$scope.note = localStorage.getItem("d3eada"); 
		$scope.openModal();
    }
	
	$scope.baa1be= function (){
       $scope.key = "baa1be";
		$scope.note = localStorage.getItem("baa1be"); 
		$scope.openModal();
    }
	
	$scope.d0cbe1= function (){
        $scope.key = "d0cbe1";
		$scope.note = localStorage.getItem("d0cbe1"); 
		$scope.openModal();
    }
	
	$scope.fefbe8= function (){
        $scope.key = "fefbe8";
		$scope.note = localStorage.getItem("fefbe8"); 
		$scope.openModal();
    }
	
	$scope.fef0c3= function (){
        $scope.key = "fef0c3";
		$scope.note = localStorage.getItem("fef0c3"); 
		$scope.openModal();
    }
	
	$scope.c99ba5= function (){
        $scope.key = "c99ba5";
		$scope.note = localStorage.getItem("c99ba5"); 
		$scope.openModal();
    }
	
	$scope.b9aabf= function (){
        $scope.key = "b9aabf";
		$scope.note = localStorage.getItem("b9aabf"); 
		$scope.openModal();
    }
	
	$scope.dbcad2= function (){
        $scope.key = "dbcad2";
		$scope.note = localStorage.getItem("dbcad2"); 
		$scope.openModal();
    }
	
	$scope.dbafae= function (){
       $scope.key = "dbafae";
		$scope.note = localStorage.getItem("dbafae"); 
		$scope.openModal();
    }
	
	$scope.cec9df= function (){
        $scope.key = "cec9df";
		$scope.note = localStorage.getItem("cec9df"); 
		$scope.openModal();
    }
	
	$scope.b3ccb7= function (){
        $scope.key = "b3ccb7";
		$scope.note = localStorage.getItem("b3ccb7"); 
		$scope.openModal();
    }
	
	$scope.fdf9de= function (){
        $scope.key = "fdf9de";
		$scope.note = localStorage.getItem("fdf9de"); 
		$scope.openModal();
    }
	
	$scope.e0c8c8= function (){
        $scope.key = "e0c8c8";
		$scope.note = localStorage.getItem("e0c8c8"); 
		$scope.openModal();
    }
	
	$scope.fcefbb= function (){
        $scope.key = "fcefbb";
		$scope.note = localStorage.getItem("fcefbb"); 
		$scope.openModal();
    }
	
	$scope.b29ab3= function (){
        $scope.key = "b29ab3";
		$scope.note = localStorage.getItem("b29ab3"); 
		$scope.openModal();
    }
	
	$scope.f4edd2= function (){
        $scope.key = "f4edd2";
		$scope.note = localStorage.getItem("f4edd2"); 
		$scope.openModal();
    }
	
	$scope.d3c7df= function (){
        $scope.key = "d3c7df";
		$scope.note = localStorage.getItem("d3c7df"); 
		$scope.openModal();
    }
	
	$scope.c1d9f5= function (){
       $scope.key = "c1d9f5";
		$scope.note = localStorage.getItem("c1d9f5"); 
		$scope.openModal();
    }
	
	$scope.feefbd= function (){
        $scope.key = "feefbd";
		$scope.note = localStorage.getItem("feefbd"); 
		$scope.openModal();
    }
	
	$scope.f0b0cb= function (){
        $scope.key = "f0b0cb";
		$scope.note = localStorage.getItem("f0b0cb"); 
		$scope.openModal();
    }
	
	$scope.bba4c2= function (){
        $scope.key = "bba4c2";
		$scope.note = localStorage.getItem("bba4c2"); 
		$scope.openModal();
    }
	
	$scope.dde8e2= function (){
       $scope.key = "dde8e2";
		$scope.note = localStorage.getItem("dde8e2"); 
		$scope.openModal();
    }
	
	$scope.d6a1a7= function (){
        $scope.key = "d6a1a7";
		$scope.note = localStorage.getItem("d6a1a7"); 
		$scope.openModal();
    }
	
	$scope.e2c6c8= function (){
       $scope.key = "e2c6c8";
		$scope.note = localStorage.getItem("e2c6c8"); 
		$scope.openModal();
    }
	
	$scope.e1f3fd= function (){
        $scope.key = "e1f3fd";
		$scope.note = localStorage.getItem("e1f3fd"); 
		$scope.openModal();
    }
	
	$scope.baaac4= function (){
       $scope.key = "baaac4";
		$scope.note = localStorage.getItem("baaac4"); 
		$scope.openModal();
    }
	
	$scope.fed5e3= function (){
        $scope.key = "fed5e3";
		$scope.note = localStorage.getItem("fed5e3"); 
		$scope.openModal();
    }
	
	$scope.fdf2d6= function (){
        $scope.key = "fdf2d6";
		$scope.note = localStorage.getItem("fdf2d6"); 
		$scope.openModal();
    }
	
	$scope.ebadc4= function (){
        $scope.key = "ebadc4";
		$scope.note = localStorage.getItem("ebadc4"); 
		$scope.openModal();
    }
	
	$scope.d4c9da= function (){
        $scope.key = "d4c9da";
		$scope.note = localStorage.getItem("d4c9da"); 
		$scope.openModal();
    }
})



.controller('PlaylistCtrl', function($scope, $stateParams) {
});
