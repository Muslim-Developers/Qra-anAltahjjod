angular
  .module("starter.controllers", [])

  .controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal
      .fromTemplateUrl("templates/playlist.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log("Doing login", $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller("The17Ctrl", function ($scope) {
    $scope.b7d8f9 = function () {
      alert("hi from the first aya");
    };
  })

  .controller("The3Ctrl", function ($scope) {
    $scope.d0e4fc = function () {
      alert("hi from the first context");
    };
    $scope.b4a4be = function () {
      alert("hi from the second context");
    };

    $scope.fdf6da = function () {
      alert("92-94 Ayat");
    };

    $scope.dec7cb = function () {
      alert("95-97 Ayat");
    };

    $scope.e2d6e9 = function () {
      alert("98-101 Ayat");
    };

    $scope.b4cfae = function () {
      alert("102-109 Ayat");
    };

    $scope.b9a4bc = function () {
      alert("110-115 Ayat");
    };

    $scope.fbdbeb = function () {
      alert("116-117 Ayat");
    };

    $scope.cecad9 = function () {
      alert("118-120 Ayat");
    };

    $scope.fff9c2 = function () {
      alert("121-129 Ayat");
    };

    $scope.d29ea5 = function () {
      alert("130-132 Ayat");
    };

    $scope.d3dfd1 = function () {
      alert("133-136 Ayat");
    };

    $scope.d4cbdc = function () {
      alert("137-144 Ayat");
    };

    $scope.bca5c1 = function () {
      alert("145-148 Ayat");
    };

    $scope.c5b8ce = function () {
      alert("149-151 Ayat");
    };

    $scope.fbf3cc = function () {
      alert("152-155 Ayat");
    };

    $scope.b2a0b6 = function () {
      alert("156-158 Ayat");
    };

    $scope.a7d1af = function () {
      alert("159-160 Ayat");
    };

    $scope.d0e6d9 = function () {
      alert("161-163 Ayat");
    };

    $scope.f9eeb8 = function () {
      alert("164-165 Ayat");
    };

    $scope.f7f2dc = function () {
      alert("166-168 Ayat");
    };

    $scope.f4ebb1 = function () {
      alert("169-175 Ayat");
    };

    $scope.b8d5bd = function () {
      alert("176-180 Ayat");
    };

    $scope.cdc4d8 = function () {
      alert("181-184 Ayat");
    };

    $scope.ffa88e = function () {
      alert("185-186 Ayat");
    };

    $scope.fff7da = function () {
      alert("187-189 Ayat");
    };

    $scope.d5e4df = function () {
      alert("190-195 Ayat");
    };

    $scope.b5a2be = function () {
      alert("196-198 Ayat");
    };

    $scope.fdeeab = function () {
      alert("199-200 Ayat");
    };
  })

  .controller("The4Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };
    $ionicModal
      .fromTemplateUrl("templates/playlist.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    $scope.d1c3d7 = function () {
      $scope.key = "d1c3d7";
      $scope.note = localStorage.getItem("d1c3d7");
      $scope.openModal();
      //alert("Aya 1");
    };

    $scope.e3c5c5 = function () {
      alert("2-6 Ayat");
    };

    $scope.dca4a9 = function () {
      alert("7-10 Ayat");
    };

    $scope.dca4a9 = function () {
      alert("7-10 Ayat");
    };

    $scope.dfc1c3 = function () {
      alert("11-12 Ayat");
    };

    $scope.b3a0bc = function () {
      alert("13-14 Ayat");
    };

    $scope.d8a6a9 = function () {
      alert("15-16 Ayat");
    };

    $scope.cbbfd5 = function () {
      alert("17-18 Ayat");
    };

    $scope.e1c5c4 = function () {
      alert("19-21 Ayat");
    };

    $scope.db9fa1 = function () {
      alert("22-24 Ayat");
    };

    $scope.e6cac9 = function () {
      alert("Aya 25");
    };

    $scope.c6aec9 = function () {
      alert("26-28 Ayat");
    };

    $scope.dab0b7 = function () {
      alert("29-30 Ayat");
    };

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log("Doing login", $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller("PlaylistsCtrl", function ($scope) {
    $scope.playlists = [
      { title: "سورة البقرة ", id: 2 },
      { title: "سورة ال عمران ", id: 3 },
      { title: "سورة النــساء ", id: 4 },
      { title: "سورة المائــدة ", id: 5 },
      { title: "سورة الأنعــام ", id: 6 },
      { title: "سورة يوسف ", id: 11 },
      { title: "سورة الاسراء ", id: 17 },
      { title: "سورة الكهف ", id: 18 },
      { title: "سورة مريم ", id: 19 },
      { title: "سورة طه ", id: 20 },
      { title: "سورة الأنبياء ", id: 21 },
      { title: "سورة الحج ", id: 22 },
      { title: "سورة المؤمنون ", id: 23 },
      { title: "سورة النور ", id: 24 },
      { title: "سورة الفرقان ", id: 25 },
      { title: "سورة الشعراء ", id: 26 },
      { title: "سورة النمل ", id: 27 },
      { title: "سورة القصص ", id: 28 },
      { title: "سورة العنكبوت ", id: 29 },
      { title: "سورة فصلت ", id: 41 },
      { title: "سورة الشورى ", id: 42 },
      { title: "سورة الزخرف ", id: 43 },
      { title: "سورة الدخان ", id: 44 },
      { title: "سورة الجاثية ", id: 45 },
      { title: "سورة الأحقاف ", id: 46 },
      { title: "سورة محمد ", id: 47 },
      { title: "سورة الفتح ", id: 48 },
      { title: "سورة الحجرات ", id: 49 },
      { title: "سورة ق ", id: 50 },
      { title: "سورة الذاريات ", id: 51 },
      { title: "سورة الطور ", id: 52 },
      { title: "سورة النجم ", id: 53 },
      { title: "سورة القمر ", id: 54 },
      { title: "سورة الرحمن ", id: 55 },
      { title: "سورة الواقعة ", id: 56 },
      { title: "سورة الحديد ", id: 57 },
      { title: "سورة المجادلة ", id: 58 },
      { title: "سورة الحشر ", id: 59 },
      { title: "سورة الممتحنة ", id: 60 },
      { title: "سورة الصف ", id: 61 },
      { title: "سورة الجمعة ", id: 62 },
      { title: "سورة المنافقون ", id: 63 },
      { title: "سورة التغابن ", id: 64 },
      { title: "سورة الطلاق ", id: 65 },
      { title: "سورة التحريم ", id: 66 },
      { title: "سورة الملك ", id: 67 },
      { title: "سورة القلم ", id: 68 },
      { title: "سورة الحاقة ", id: 69 },
      { title: "سورة المعارج ", id: 70 },
      { title: "سورة نوح ", id: 71 },
      { title: "سورة الجن ", id: 72 },
      { title: "سورة المزمل ", id: 73 },
      { title: "سورة المدثر ", id: 74 },
      { title: "سورة القيامة ", id: 75 },
      { title: "سورة الإنسان ", id: 76 },
      { title: "سورة المرسلات ", id: 77 },
      { title: "سورة النبأ ", id: 78 },
      { title: "سورة النازعات ", id: 79 },
      { title: "سورة عبس ", id: 80 },
      { title: "سورة التكوير ", id: 81 },
      { title: "سورة الانفطار ", id: 82 },
      { title: "سورة المطففين ", id: 83 },
      { title: "سورة الانشقاق ", id: 84 },
      { title: "سورة البروج ", id: 85 },
      { title: "سورة الطارق ", id: 86 },
    ];
  })

  .controller("The17Ctrl", function ($scope) {
    $scope.b7d8f9 = function () {
      alert("hi from the first aya");
    };
  })

  .controller("The3Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };

    $ionicModal
      .fromTemplateUrl("templates/modal.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    //function open the modal

    $scope.d0e4fc = function () {
      $scope.key = "d0e4fc";
      $scope.note = localStorage.getItem("d0e4fc"); // take the data from local storage
      $scope.openModal();
    };

    $scope.b4a4be = function () {
      $scope.key = "b4a4be";
      $scope.note = localStorage.getItem("b4a4be");
      $scope.openModal();
    };

    $scope.fdf6da = function () {
      $scope.key = "fdf6da";
      $scope.note = localStorage.getItem("fdf6da");
      $scope.openModal();
    };

    $scope.dec7cb = function () {
      $scope.key = "dec7cb";
      $scope.note = localStorage.getItem("dec7cb");
      $scope.openModal();
    };

    $scope.e2d6e9 = function () {
      $scope.key = "e2d6e9";
      $scope.note = localStorage.getItem("e2d6e9");
      $scope.openModal();
    };

    $scope.b4cfae = function () {
      $scope.key = "b4cfae";
      $scope.note = localStorage.getItem("b4cfae");
      $scope.openModal();
    };

    $scope.b9a4bc = function () {
      $scope.key = "b9a4bc";
      $scope.note = localStorage.getItem("b9a4bc");
      $scope.openModal();
    };

    $scope.fbdbeb = function () {
      $scope.key = "fbdbeb";
      $scope.note = localStorage.getItem("fbdbeb");
      $scope.openModal();
    };

    $scope.cecad9 = function () {
      $scope.key = "cecad9";
      $scope.note = localStorage.getItem("cecad9");
      $scope.openModal();
    };

    $scope.fff9c2 = function () {
      $scope.key = "fff9c2";
      $scope.note = localStorage.getItem("fff9c2");
      $scope.openModal();
    };

    $scope.d29ea5 = function () {
      $scope.key = "d29ea5";
      $scope.note = localStorage.getItem("d29ea5");
      $scope.openModal();
    };

    $scope.d3dfd1 = function () {
      $scope.key = "d3dfd1";
      $scope.note = localStorage.getItem("d3dfd1");
      $scope.openModal();
    };
    $scope.d4cbdc = function () {
      $scope.key = "d4cbdc";
      $scope.note = localStorage.getItem("d4cbdc");
      $scope.openModal();
    };

    $scope.bca5c1 = function () {
      $scope.key = "bca5c1";
      $scope.note = localStorage.getItem("bca5c1");
      $scope.openModal();
    };

    $scope.c5b8ce = function () {
      $scope.key = "c5b8ce";
      $scope.note = localStorage.getItem("c5b8ce");
      $scope.openModal();
    };

    $scope.fbf3cc = function () {
      $scope.key = "fbf3cc";
      $scope.note = localStorage.getItem("fbf3cc");
      $scope.openModal();
    };

    $scope.b2a0b6 = function () {
      $scope.key = "b2a0b6";
      $scope.note = localStorage.getItem("b2a0b6");
      $scope.openModal();
    };

    $scope.a7d1af = function () {
      $scope.key = "a7d1af";
      $scope.note = localStorage.getItem("a7d1af");
      $scope.openModal();
    };

    $scope.d0e6d9 = function () {
      $scope.key = "d0e6d9";
      $scope.note = localStorage.getItem("d0e6d9");
      $scope.openModal();
    };

    $scope.f9eeb8 = function () {
      $scope.key = "f9eeb8";
      $scope.note = localStorage.getItem("f9eeb8");
      $scope.openModal();
    };

    $scope.f7f2dc = function () {
      $scope.key = "f7f2dc";
      $scope.note = localStorage.getItem("f7f2dc");
      $scope.openModal();
    };

    $scope.f4ebb1 = function () {
      $scope.key = "f4ebb1";
      $scope.note = localStorage.getItem("f4ebb1");
      $scope.openModal();
    };

    $scope.b8d5bd = function () {
      $scope.key = "b8d5bd";
      $scope.note = localStorage.getItem("b8d5bd");
      $scope.openModal();
    };

    $scope.cdc4d8 = function () {
      $scope.key = "cdc4d8";
      $scope.note = localStorage.getItem("cdc4d8");
      $scope.openModal();
    };
    $scope.ffa88e = function () {
      $scope.key = "ffa88e";
      $scope.note = localStorage.getItem("ffa88e");
      $scope.openModal();
    };

    $scope.fff7da = function () {
      $scope.key = "fff7da";
      $scope.note = localStorage.getItem("fff7da");
      $scope.openModal();
    };

    $scope.d5e4df = function () {
      $scope.key = "d5e4df";
      $scope.note = localStorage.getItem("d5e4df");
      $scope.openModal();
    };

    $scope.b5a2be = function () {
      $scope.key = "b5a2be";
      $scope.note = localStorage.getItem("b5a2be");
      $scope.openModal();
    };

    $scope.fdeeab = function () {
      $scope.key = "fdeeab";
      $scope.note = localStorage.getItem("fdeeab");
      $scope.openModal();
    };
  })

  .controller("The4Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };

    $ionicModal
      .fromTemplateUrl("templates/modal.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    //function open the modal

    $scope.d1c3d7 = function () {
      $scope.key = "d1c3d7";
      $scope.note = localStorage.getItem("d1c3d7");
      $scope.openModal();
    };

    $scope.e3c5c5 = function () {
      $scope.key = "e3c5c5";
      $scope.note = localStorage.getItem("e3c5c5");
      $scope.openModal();
    };

    $scope.dca4a9 = function () {
      $scope.key = "dca4a9";
      $scope.note = localStorage.getItem("dca4a9");
      $scope.openModal();
    };

    $scope.dfc1c3 = function () {
      $scope.key = "dfc1c3";
      $scope.note = localStorage.getItem("dfc1c3");
      $scope.openModal();
    };

    $scope.b3a0bc = function () {
      $scope.key = "b3a0bc";
      $scope.note = localStorage.getItem("b3a0bc");
      $scope.openModal();
    };

    $scope.d8a6a9 = function () {
      $scope.key = "d8a6a9";
      $scope.note = localStorage.getItem("d8a6a9");
      $scope.openModal();
    };

    $scope.cbbfd5 = function () {
      $scope.key = "cbbfd5";
      $scope.note = localStorage.getItem("cbbfd5");
      $scope.openModal();
    };

    $scope.e1c5c4 = function () {
      $scope.key = "e1c5c4";
      $scope.note = localStorage.getItem("e1c5c4");
      $scope.openModal();
    };

    $scope.db9fa1 = function () {
      $scope.key = "db9fa1";
      $scope.note = localStorage.getItem("db9fa1");
      $scope.openModal();
    };

    $scope.e6cac9 = function () {
      $scope.key = "e6cac9";
      $scope.note = localStorage.getItem("e6cac9");
      $scope.openModal();
    };

    $scope.c6aec9 = function () {
      $scope.key = "c6aec9";
      $scope.note = localStorage.getItem("c6aec9");
      $scope.openModal();
    };

    $scope.dab0b7 = function () {
      $scope.key = "dab0b7";
      $scope.note = localStorage.getItem("dab0b7");
      $scope.openModal();
    };

    $scope.dacee2 = function () {
      $scope.key = "dacee2";
      $scope.note = localStorage.getItem("dacee2");
      $scope.openModal();
    };

    $scope.bdadca = function () {
      $scope.key = "bdadca";
      $scope.note = localStorage.getItem("bdadca");
      $scope.openModal();
    };

    $scope.e3cdcd = function () {
      $scope.key = "e3cdcd";
      $scope.note = localStorage.getItem("e3cdcd");
      $scope.openModal();
    };

    $scope.ddeefd = function () {
      $scope.key = "ddeefd";
      $scope.note = localStorage.getItem("ddeefd");
      $scope.openModal();
    };

    $scope.f5b599 = function () {
      $scope.key = "f5b599";
      $scope.note = localStorage.getItem("f5b599");
      $scope.openModal();
    };

    $scope.cc9fa2 = function () {
      $scope.key = "cc9fa2";
      $scope.note = localStorage.getItem("cc9fa2");
      $scope.openModal();
    };

    $scope.f5e4b8 = function () {
      $scope.key = "f5e4b8";
      $scope.note = localStorage.getItem("f5e4b8");
      $scope.openModal();
    };

    $scope.fff8de = function () {
      $scope.key = "fff8de";
      $scope.note = localStorage.getItem("fff8de");
      $scope.openModal();
    };

    $scope.fbedbc = function () {
      $scope.key = "fbedbc";
      $scope.note = localStorage.getItem("fbedbc");
      $scope.openModal();
    };

    $scope.f8f0db = function () {
      $scope.key = "f8f0db";
      $scope.note = localStorage.getItem("f8f0db");
      $scope.openModal();
    };

    $scope.f6cadb = function () {
      $scope.key = "f6cadb";
      $scope.note = localStorage.getItem("f6cadb");
      $scope.openModal();
    };

    $scope.b2a1bc = function () {
      $scope.key = "b2a1bc";
      $scope.note = localStorage.getItem("b2a1bc");
      $scope.openModal();
    };

    $scope.f8eab9 = function () {
      $scope.key = "f8eab9";
      $scope.note = localStorage.getItem("f8eab9");
      $scope.openModal();
    };

    $scope.d3c8e9 = function () {
      $scope.key = "d3c8e9";
      $scope.note = localStorage.getItem("d3c8e9");
      $scope.openModal();
    };

    $scope.d3eada = function () {
      $scope.key = "d3eada";
      $scope.note = localStorage.getItem("d3eada");
      $scope.openModal();
    };

    $scope.baa1be = function () {
      $scope.key = "baa1be";
      $scope.note = localStorage.getItem("baa1be");
      $scope.openModal();
    };

    $scope.d0cbe1 = function () {
      $scope.key = "d0cbe1";
      $scope.note = localStorage.getItem("d0cbe1");
      $scope.openModal();
    };

    $scope.fefbe8 = function () {
      $scope.key = "fefbe8";
      $scope.note = localStorage.getItem("fefbe8");
      $scope.openModal();
    };

    $scope.fef0c3 = function () {
      $scope.key = "fef0c3";
      $scope.note = localStorage.getItem("fef0c3");
      $scope.openModal();
    };

    $scope.c99ba5 = function () {
      $scope.key = "c99ba5";
      $scope.note = localStorage.getItem("c99ba5");
      $scope.openModal();
    };

    $scope.b9aabf = function () {
      $scope.key = "b9aabf";
      $scope.note = localStorage.getItem("b9aabf");
      $scope.openModal();
    };

    $scope.dbcad2 = function () {
      $scope.key = "dbcad2";
      $scope.note = localStorage.getItem("dbcad2");
      $scope.openModal();
    };

    $scope.dbafae = function () {
      $scope.key = "dbafae";
      $scope.note = localStorage.getItem("dbafae");
      $scope.openModal();
    };

    $scope.cec9df = function () {
      $scope.key = "cec9df";
      $scope.note = localStorage.getItem("cec9df");
      $scope.openModal();
    };

    $scope.b3ccb7 = function () {
      $scope.key = "b3ccb7";
      $scope.note = localStorage.getItem("b3ccb7");
      $scope.openModal();
    };

    $scope.fdf9de = function () {
      $scope.key = "fdf9de";
      $scope.note = localStorage.getItem("fdf9de");
      $scope.openModal();
    };

    $scope.e0c8c8 = function () {
      $scope.key = "e0c8c8";
      $scope.note = localStorage.getItem("e0c8c8");
      $scope.openModal();
    };

    $scope.fcefbb = function () {
      $scope.key = "fcefbb";
      $scope.note = localStorage.getItem("fcefbb");
      $scope.openModal();
    };

    $scope.b29ab3 = function () {
      $scope.key = "b29ab3";
      $scope.note = localStorage.getItem("b29ab3");
      $scope.openModal();
    };

    $scope.f4edd2 = function () {
      $scope.key = "f4edd2";
      $scope.note = localStorage.getItem("f4edd2");
      $scope.openModal();
    };

    $scope.d3c7df = function () {
      $scope.key = "d3c7df";
      $scope.note = localStorage.getItem("d3c7df");
      $scope.openModal();
    };

    $scope.c1d9f5 = function () {
      $scope.key = "c1d9f5";
      $scope.note = localStorage.getItem("c1d9f5");
      $scope.openModal();
    };

    $scope.feefbd = function () {
      $scope.key = "feefbd";
      $scope.note = localStorage.getItem("feefbd");
      $scope.openModal();
    };

    $scope.f0b0cb = function () {
      $scope.key = "f0b0cb";
      $scope.note = localStorage.getItem("f0b0cb");
      $scope.openModal();
    };

    $scope.bba4c2 = function () {
      $scope.key = "bba4c2";
      $scope.note = localStorage.getItem("bba4c2");
      $scope.openModal();
    };

    $scope.dde8e2 = function () {
      $scope.key = "dde8e2";
      $scope.note = localStorage.getItem("dde8e2");
      $scope.openModal();
    };

    $scope.d6a1a7 = function () {
      $scope.key = "d6a1a7";
      $scope.note = localStorage.getItem("d6a1a7");
      $scope.openModal();
    };

    $scope.e2c6c8 = function () {
      $scope.key = "e2c6c8";
      $scope.note = localStorage.getItem("e2c6c8");
      $scope.openModal();
    };

    $scope.e1f3fd = function () {
      $scope.key = "e1f3fd";
      $scope.note = localStorage.getItem("e1f3fd");
      $scope.openModal();
    };

    $scope.baaac4 = function () {
      $scope.key = "baaac4";
      $scope.note = localStorage.getItem("baaac4");
      $scope.openModal();
    };

    $scope.fed5e3 = function () {
      $scope.key = "fed5e3";
      $scope.note = localStorage.getItem("fed5e3");
      $scope.openModal();
    };

    $scope.fdf2d6 = function () {
      $scope.key = "fdf2d6";
      $scope.note = localStorage.getItem("fdf2d6");
      $scope.openModal();
    };

    $scope.ebadc4 = function () {
      $scope.key = "ebadc4";
      $scope.note = localStorage.getItem("ebadc4");
      $scope.openModal();
    };

    $scope.d4c9da = function () {
      $scope.key = "d4c9da";
      $scope.note = localStorage.getItem("d4c9da");
      $scope.openModal();
    };
  })

  .controller("The5Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };

    $ionicModal
      .fromTemplateUrl("templates/modal.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    //function open the modal

    $scope.dec5c8 = function () {
      $scope.key = "dec5c8";
      $scope.note = localStorage.getItem("dec5c8");
      $scope.openModal();
    };

    $scope.d7a0a3 = function () {
      $scope.key = "d7a0a3";
      $scope.note = localStorage.getItem("d7a0a3");
      $scope.openModal();
    };

    $scope.d3bbbb = function () {
      $scope.key = "d3bbbb";
      $scope.note = localStorage.getItem("d3bbbb");
      $scope.openModal();
    };

    $scope.cf9a9a = function () {
      $scope.key = "cf9a9a";
      $scope.note = localStorage.getItem("cf9a9a");
      $scope.openModal();
    };

    $scope.d9ecfa = function () {
      $scope.key = "d9ecfa";
      $scope.note = localStorage.getItem("d9ecfa");
      $scope.openModal();
    };

    $scope.dce8dc = function () {
      $scope.key = "dce8dc";
      $scope.note = localStorage.getItem("dce8dc");
      $scope.openModal();
    };

    $scope.e9a9c4 = function () {
      $scope.key = "e9a9c4";
      $scope.note = localStorage.getItem("e9a9c4");
      $scope.openModal();
    };

    $scope.cee6ff = function () {
      $scope.key = "cee6ff";
      $scope.note = localStorage.getItem("cee6ff");
      $scope.openModal();
    };

    $scope.fcf3d6 = function () {
      $scope.key = "fcf3d6";
      $scope.note = localStorage.getItem("fcf3d6");
      $scope.openModal();
    };

    $scope.ccc4d4 = function () {
      $scope.key = "ccc4d4";
      $scope.note = localStorage.getItem("ccc4d4");
      $scope.openModal();
    };

    $scope.f3e7c0 = function () {
      $scope.key = "f3e7c0";
      $scope.note = localStorage.getItem("f3e7c0");
      $scope.openModal();
    };

    $scope.fbf6e3 = function () {
      $scope.key = "fbf6e3";
      $scope.note = localStorage.getItem("fbf6e3");
      $scope.openModal();
    };

    $scope.fdf5c7 = function () {
      $scope.key = "fdf5c7";
      $scope.note = localStorage.getItem("fdf5c7");
      $scope.openModal();
    };

    $scope.faf4de = function () {
      $scope.key = "faf4de";
      $scope.note = localStorage.getItem("faf4de");
      $scope.openModal();
    };

    $scope.ffb4a1 = function () {
      $scope.key = "ffb4a1";
      $scope.note = localStorage.getItem("ffb4a1");
      $scope.openModal();
    };

    $scope.e1b0b0 = function () {
      $scope.key = "e1b0b0";
      $scope.note = localStorage.getItem("e1b0b0");
      $scope.openModal();
    };

    $scope.e1b0b0 = function () {
      $scope.key = "e1b0b0";
      $scope.note = localStorage.getItem("e1b0b0");
      $scope.openModal();
    };

    $scope.f9f2ba = function () {
      $scope.key = "f9f2ba";
      $scope.note = localStorage.getItem("f9f2ba");
      $scope.openModal();
    };

    $scope.dad6e8 = function () {
      $scope.key = "dad6e8";
      $scope.note = localStorage.getItem("dad6e8");
      $scope.openModal();
    };

    $scope.bbacc6 = function () {
      $scope.key = "bbacc6";
      $scope.note = localStorage.getItem("bbacc6");
      $scope.openModal();
    };

    $scope.ffffdc = function () {
      $scope.key = "ffffdc";
      $scope.note = localStorage.getItem("ffffdc");
      $scope.openModal();
    };

    $scope.e1edd5 = function () {
      $scope.key = "e1edd5";
      $scope.note = localStorage.getItem("e1edd5");
      $scope.openModal();
    };

    $scope.d4c8dc = function () {
      $scope.key = "d4c8dc";
      $scope.note = localStorage.getItem("d4c8dc");
      $scope.openModal();
    };

    $scope.ffecb6 = function () {
      $scope.key = "ffecb6";
      $scope.note = localStorage.getItem("ffecb6");
      $scope.openModal();
    };

    $scope.fff8cd = function () {
      $scope.key = "fff8cd";
      $scope.note = localStorage.getItem("fff8cd");
      $scope.openModal();
    };

    $scope.fef0a7 = function () {
      $scope.key = "fef0a7";
      $scope.note = localStorage.getItem("fef0a7");
      $scope.openModal();
    };

    $scope.baa3bf = function () {
      $scope.key = "baa3bf";
      $scope.note = localStorage.getItem("baa3bf");
      $scope.openModal();
    };

    $scope.f8f1c7 = function () {
      $scope.key = "f8f1c7";
      $scope.note = localStorage.getItem("f8f1c7");
      $scope.openModal();
    };

    $scope.fff1b0 = function () {
      $scope.key = "fff1b0";
      $scope.note = localStorage.getItem("fff1b0");
      $scope.openModal();
    };

    $scope.cfc2dc = function () {
      $scope.key = "cfc2dc";
      $scope.note = localStorage.getItem("cfc2dc");
      $scope.openModal();
    };

    $scope.c3a5ca = function () {
      $scope.key = "c3a5ca";
      $scope.note = localStorage.getItem("c3a5ca");
      $scope.openModal();
    };

    /* Juza 7  */

    $scope.b2a0b6 = function () {
      $scope.key = "b2a0b6";
      $scope.note = localStorage.getItem("b2a0b6");
      $scope.openModal();
    };

    $scope.d6a9a8 = function () {
      $scope.key = "d6a9a8";
      $scope.note = localStorage.getItem("d6a9a8");
      $scope.openModal();
    };

    $scope.e1cccc = function () {
      $scope.key = "e1cccc";
      $scope.note = localStorage.getItem("e1cccc");
      $scope.openModal();
    };

    $scope.dfaca8 = function () {
      $scope.key = "dfaca8";
      $scope.note = localStorage.getItem("dfaca8");
      $scope.openModal();
    };

    $scope.e1ccc9 = function () {
      $scope.key = "e1ccc9";
      $scope.note = localStorage.getItem("e1ccc9");
      $scope.openModal();
    };

    $scope.d5d1e8 = function () {
      $scope.key = "d5d1e8";
      $scope.note = localStorage.getItem("d5d1e8");
      $scope.openModal();
    };

    $scope.d7b5a9 = function () {
      $scope.key = "d7b5a9";
      $scope.note = localStorage.getItem("d7b5a9");
      $scope.openModal();
    };

    $scope.fff5da = function () {
      $scope.key = "fff5da";
      $scope.note = localStorage.getItem("fff5da");
      $scope.openModal();
    };

    $scope.dfd0cd = function () {
      $scope.key = "dfd0cd";
      $scope.note = localStorage.getItem("dfd0cd");
      $scope.openModal();
    };

    $scope.dfd0cd = function () {
      $scope.key = "dfd0cd";
      $scope.note = localStorage.getItem("dfd0cd");
      $scope.openModal();
    };

    $scope.f8c4ad = function () {
      $scope.key = "f8c4ad";
      $scope.note = localStorage.getItem("f8c4ad");
      $scope.openModal();
    };

    $scope.f8e9bb = function () {
      $scope.key = "f8e9bb";
      $scope.note = localStorage.getItem("f8e9bb");
      $scope.openModal();
    };

    $scope.f9f0d3 = function () {
      $scope.key = "f9f0d3";
      $scope.note = localStorage.getItem("f9f0d3");
      $scope.openModal();
    };

    $scope.fff0b9 = function () {
      $scope.key = "fff0b9";
      $scope.note = localStorage.getItem("f9f0d3");
      $scope.openModal();
    };
  })

  .controller("The11Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };
  })

  .controller("The6Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
      alert(key);
      alert(data);
      localStorage.setItem(key, data);
      $scope.modal.hide();
    };

    $ionicModal
      .fromTemplateUrl("templates/modal.html", {
        scope: $scope,
      })
      .then(function (modal) {
        $scope.modal = modal;
      });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    //function open the modal

    $scope.bed9f6 = function () {
      $scope.key = "bed9f6";
      $scope.note = localStorage.getItem("bed9f6");
      $scope.openModal();
    };

    $scope.faf3d6 = function () {
      $scope.key = "faf3d6";
      $scope.note = localStorage.getItem("faf3d6");
      $scope.openModal();
    };

    $scope.aa9ab4 = function () {
      $scope.key = "aa9ab4";
      $scope.note = localStorage.getItem("aa9ab4");
      $scope.openModal();
    };

    $scope.d5e6f8 = function () {
      $scope.key = "d5e6f8";
      $scope.note = localStorage.getItem("d5e6f8");
      $scope.openModal();
    };

    $scope.c5c1d3 = function () {
      $scope.key = "c5c1d3";
      $scope.note = localStorage.getItem("c5c1d3");
      $scope.openModal();
    };

    $scope.f4a578 = function () {
      $scope.key = "f4a578";
      $scope.note = localStorage.getItem("f4a578");
      $scope.openModal();
    };

    $scope.e6a2bb = function () {
      $scope.key = "e6a2bb";
      $scope.note = localStorage.getItem("e6a2bb");
      $scope.openModal();
    };

    $scope.fdeeb2 = function () {
      $scope.key = "fdeeb2";
      $scope.note = localStorage.getItem("fdeeb2");
      $scope.openModal();
    };

    $scope.b1a4b5 = function () {
      $scope.key = "b1a4b5";
      $scope.note = localStorage.getItem("b1a4b5");
      $scope.openModal();
    };

    $scope.d4c8e0 = function () {
      $scope.key = "d4c8e0";
      $scope.note = localStorage.getItem("d4c8e0");
      $scope.openModal();
    };

    $scope.a593a9 = function () {
      $scope.key = "a593a9";
      $scope.note = localStorage.getItem("a593a9");
      $scope.openModal();
    };

    $scope.fdf5d1 = function () {
      $scope.key = "fdf5d1";
      $scope.note = localStorage.getItem("fdf5d1");
      $scope.openModal();
    };

    $scope.fbeeb8 = function () {
      $scope.key = "fbeeb8";
      $scope.note = localStorage.getItem("fbeeb8");
      $scope.openModal();
    };

    $scope.bcd3f2 = function () {
      $scope.key = "bcd3f2";
      $scope.note = localStorage.getItem("bcd3f2");
      $scope.openModal();
    };

    $scope.d7e3fb = function () {
      $scope.key = "d7e3fb";
      $scope.note = localStorage.getItem("d7e3fb");
      $scope.openModal();
    };

    $scope.cec6dd = function () {
      $scope.key = "cec6dd";
      $scope.note = localStorage.getItem("cec6dd");
      $scope.openModal();
    };

    $scope.fef6d2 = function () {
      $scope.key = "fef6d2";
      $scope.note = localStorage.getItem("fef6d2");
      $scope.openModal();
    };

    $scope.a4a0b7 = function () {
      $scope.key = "a4a0b7";
      $scope.note = localStorage.getItem("a4a0b7");
      $scope.openModal();
    };

    $scope.fdeeb6 = function () {
      $scope.key = "fdeeb6";
      $scope.note = localStorage.getItem("fdeeb6");
      $scope.openModal();
    };

    $scope.d1cde7 = function () {
      $scope.key = "d1cde7";
      $scope.note = localStorage.getItem("d1cde7");
      $scope.openModal();
    };

    $scope.fbf0d0 = function () {
      $scope.key = "fbf0d0";
      $scope.note = localStorage.getItem("fbf0d0");
      $scope.openModal();
    };

    $scope.a793ac = function () {
      $scope.key = "a793ac";
      $scope.note = localStorage.getItem("a793ac");
      $scope.openModal();
    };

    $scope.f7c19f = function () {
      $scope.key = "f7c19f";
      $scope.note = localStorage.getItem("f7c19f");
      $scope.openModal();
    };

    $scope.b1cff1 = function () {
      $scope.key = "b1cff1";
      $scope.note = localStorage.getItem("b1cff1");
      $scope.openModal();
    };

    $scope.d7eafb = function () {
      $scope.key = "d7eafb";
      $scope.note = localStorage.getItem("d7eafb");
      $scope.openModal();
    };

    $scope.cec8e5 = function () {
      $scope.key = "cec8e5";
      $scope.note = localStorage.getItem("cec8e5");
      $scope.openModal();
    };

    $scope.fdf1a9 = function () {
      $scope.key = "fdf1a9";
      $scope.note = localStorage.getItem("fdf1a9");
      $scope.openModal();
    };
  })

  .controller("PlaylistCtrl", function ($scope, $stateParams) {});
