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

  .controller("The17Ctrl", function ($scope) {})

  .controller("The3Ctrl", function ($scope) {})

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
  })

  .controller("PlaylistsCtrl", function ($scope) {
    $scope.playlists = [
      { title: "سورة الفاتحة ", id: 1 },
      { title: "سورة البقرة ", id: 2 },
      { title: "سورة ال عمران ", id: 3 },
      { title: "سورة النــساء ", id: 4 },
      { title: "سورة المائــدة ", id: 5 },
      { title: "سورة الأنعــام ", id: 6 },
      { title: "سورة الأعراف ", id: 7 },
      { title: "سورة الأنفال ", id: 8 },
      { title: "سورة التوبة ", id: 9 },
      { title: "سورة يونس ", id: 10 },
      { title: "سورة هود ", id: 11 },
      { title: "سورة يوسف ", id: 12 },
      { title: "سورة الرعد ", id: 13 },
      { title: "سورة إبراهيم ", id: 14 },
      { title: "سورة الحجر ", id: 15 },
      { title: "سورة النحل ", id: 16 },
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
      { title: "سورة الروم ", id: 30 },
      { title: "سورة لقمان ", id: 31 },
      { title: "سورة السجدة ", id: 32 },
      { title: "سورة الأحزاب ", id: 33 },
      { title: "سورة سبأ ", id: 34 },
      { title: "سورة فاطر ", id: 35 },
      { title: "سورة يس ", id: 36 },
      { title: "سورة الصافات ", id: 37 },
      { title: "سورة ص ", id: 38 },
      { title: "سورة الزمر ", id: 39 },
      { title: "سورة غافر ", id: 40 },
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
      { title: "سورة الأعلى ", id: 87 },
      { title: "سورة الغاشية ", id: 88 },
      { title: "سورة الفجر ", id: 89 },
      { title: "سورة البلد ", id: 90 },
      { title: "سورة الشمس ", id: 91 },
      { title: "سورة الليل ", id: 92 },
      { title: "سورة الضحى ", id: 93 },
      { title: "سورة الشرح ", id: 94 },
      { title: "سورة التين ", id: 95 },
      { title: "سورة العلق ", id: 96 },
      { title: "سورة القدر ", id: 97 },
      { title: "سورة البينة ", id: 98 },
      { title: "سورة الزلزلة ", id: 99 },
      { title: "سورة العاديات ", id: 100 },
      { title: "سورة القارعة ", id: 101 },
      { title: "سورة التكاثر ", id: 102 },
      { title: "سورة العصر ", id: 103 },
      { title: "سورة الهمزة ", id: 104 },
      { title: "سورة الفيل ", id: 105 },
      { title: "سورة قريش ", id: 106 },
      { title: "سورة الماعون ", id: 107 },
      { title: "سورة الكوثر ", id: 108 },
      { title: "سورة الكافرون ", id: 109 },
      { title: "سورة النصر ", id: 110 },
      { title: "سورة المسد ", id: 111 },
      { title: "سورة الإخلاص ", id: 112 },
      { title: "سورة الفلق ", id: 113 },
      { title: "سورة الناس ", id: 114 },
    ];
  })

  .controller("The17Ctrl", function ($scope) {})

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
  })

  .controller("PlaylistCtrl", function ($scope, $stateParams) {});
