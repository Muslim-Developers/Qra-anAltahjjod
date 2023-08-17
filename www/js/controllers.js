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

////////////// سورة الفاتحة //////////////
.controller("The1Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
//      alert(key);
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
    
//  1 to 4
    $scope.s1from1to4 = function () {
      $scope.group = "1-4";
      $scope.mean = "استحقاق الحمد للخالق وحدَهُ.";
      $scope.key = "s1from1to4";
      $scope.note = localStorage.getItem("s1from1to4");
      $scope.openModal();
    };
    
//  5 to 6
    $scope.s1from5to6 = function () {
      $scope.group = "5-6";
      $scope.mean = "حصر العبادة لله وحده، وطلب الفوز والهداية من الله جل وعلا.";
      $scope.key = "s1from5to6";
      $scope.note = localStorage.getItem("s1from5to6");
      $scope.openModal();
    };
    
//   7
    $scope.s1from7 = function () {
      $scope.group = "7";
      $scope.mean = "تفرد الدين الحق وهو الاسلام، والفاتحة تحوي مقاصد القرآن الكريم وهي مقدمة القرآن.";
      $scope.key = "s1from7";
      $scope.note = localStorage.getItem("s1from7");
      $scope.openModal();
    };
  })

////////////// سورة البقرة //////////////
.controller("The2Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
//      alert(key);
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
    
//   1-2
    $scope.s2from1to2 = function () {
      $scope.group = "1-2";
      $scope.mean = "وظيفة القرآن الكريم، والقرآن كتابُ هداية وإرشاد.";
      $scope.key = "s2from1to2";
      $scope.note = localStorage.getItem("s2from1to2");
      $scope.openModal();
    };

//   3-5
    $scope.s2from3to5 = function () {
      $scope.group = "3-5";
      $scope.mean = "بيان صفات المتقين، وأن الإيمان بالغيب هو من أهم صفاتهم.";
      $scope.key = "s2from3to5";
      $scope.note = localStorage.getItem("s2from3to5");
      $scope.openModal();
    };

//   6-7
    $scope.s2from6to7 = function () {
      $scope.group = "6-7";
      $scope.mean = "بيان صفات الكافرين، وحقيقة الكفر، والكافر هو الذي يُبادر ربَّه القطيعة.";
      $scope.key = "s2from6to7";
      $scope.note = localStorage.getItem("s2from6to7");
      $scope.openModal();
    };

//   8-16
    $scope.s2from8to16 = function () {
      $scope.group = "8-16";
      $scope.mean = "بيان صفات المنافقين وجزاؤهم، وقلب المنافق مسكن للكفر.";
      $scope.key = "s2from8to16";
      $scope.note = localStorage.getItem("s2from8to16");
      $scope.openModal();
    };

//   17-20
    $scope.s2from17to20 = function () {
      $scope.group = "17-20";
      $scope.mean = "ضرب الأمثال في المنافقين وبيان لحالهم وضلالهم.";
      $scope.key = "s2from17to20";
      $scope.note = localStorage.getItem("s2from17to20");
      $scope.openModal();
    };

//   21-22
    $scope.s2from21to22 = function () {
      $scope.group = "21-22";
      $scope.mean = "خطابٌ لكفار مكة وللبشرية بالحجة والبرهان، لأن الإسلام دين حجة وبرهان.";
      $scope.key = "s2from21to22";
      $scope.note = localStorage.getItem("s2from21to22");
      $scope.openModal();
    };

//   23-24
    $scope.s2from23to24 = function () {
      $scope.group = "23-24";
      $scope.mean = "الإعجاز والبيان القرآني حجة لله على خلقه، وبيان لجزاء الكافرين.";
      $scope.key = "s2from23to24";
      $scope.note = localStorage.getItem("s2from23to24");
      $scope.openModal();
    };

//   25
    $scope.s2from25 = function () {
      $scope.group = "25";
      $scope.mean = "تبشير المؤمنين بالجنة وبحسن جزائهم في الآخرة.";
      $scope.key = "s2from25";
      $scope.note = localStorage.getItem("s2from25");
      $scope.openModal();
    };

//   26-27
    $scope.s2from26to27 = function () {
      $scope.group = "26-27";
      $scope.mean = "الاستدلال على الحق بكل مَثَل وبكل كلمة لا مانع من ذلك.";
      $scope.key = "s2from26to27";
      $scope.note = localStorage.getItem("s2from26to27");
      $scope.openModal();
    };

//   28-29
    $scope.s2from28to29 = function () {
      $scope.group = "28-29";
      $scope.mean = "ميثاقُ الله على خلقه بعدم الشرك مقترنٌ بكل خير، وبيان لقدرته تعالى في الخلق والبعث.";
      $scope.key = "s2from28to29";
      $scope.note = localStorage.getItem("s2from28to29");
      $scope.openModal();
    };

//   30-33
    $scope.s2from30to33 = function () {
      $scope.group = "30-33";
      $scope.mean = "قصة بداية خلق البشرية، واللغة علمٌ وإلهامٌ رباني وليست بدعة بشرية.";
      $scope.key = "s2from30to33";
      $scope.note = localStorage.getItem("s2from30to33");
      $scope.openModal();
    };

//   34-39
    $scope.s2from34to39 = function () {
      $scope.group = "34-39";
      $scope.mean = "استكبار إبليس عن السجود لآدم، وتكرُّمُ الله تعالى على خلقه بقَبُول التوبة.";
      $scope.key = "s2from34to39";
      $scope.note = localStorage.getItem("s2from34to39");
      $scope.openModal();
    };

//   40-48
    $scope.s2from40to48 = function () {
      $scope.group = "40-48";
      $scope.mean = "دعوةٌ ربانية لليهود، وذكر للعهد الذي أخذه الله تعالى على بني إسرائيل باتباع النبيِّ محمدﷺ.";
      $scope.key = "s2from40to48";
      $scope.note = localStorage.getItem("s2from40to48");
      $scope.openModal();
    };

//   49-52
    $scope.s2from49to52 = function () {
      $scope.group = "49-52";
      $scope.mean = "بيان لكفر بني إسرائيل بنعم الله الكثيرة التي لم يقابلها التوحيد بل قابلها عبادة العجل وعندما تابوا تاب اله عليهم.";
      $scope.key = "s2from49to52";
      $scope.note = localStorage.getItem("s2from49to52");
      $scope.openModal();
    };

//   53-57
    $scope.s2from53to57 = function () {
      $scope.group = "53-57";
      $scope.mean = "طبيعة بني إسرائيل المادية لم تؤهلهم للاستمرار بمعرفة الله عز وجل ومراقبته فعبدوا العجل.";
      $scope.key = "s2from53to57";
      $scope.note = localStorage.getItem("s2from53to57");
      $scope.openModal();
    };

//   58-59
    $scope.s2from58to59 = function () {
      $scope.group = "58-59";
      $scope.mean = "كشف لحال بني إسرائيل وخبثهم، وإنَّ الحماقة في الاعتراض على الحق جل وعلا، وعين الكفر الاقتراح عليه، والمعصيةُ بابٌ للذل والمهانة.";
      $scope.key = "s2from58to59";
      $scope.note = localStorage.getItem("s2from58to59");
      $scope.openModal();
    };

//   60-62
    $scope.s2from60to62 = function () {
      $scope.group = "60-62";
      $scope.mean = "طلب الرتبة الدنيا بين العباد من خشية الله سبب للذل في بني إسرائيل،وطلبهم مآكلاً دون ما أعطاهم اللهعز وجل سبب لمسخ فطرتهم إلى يوم القيامة. الصلةُ بين الحق والخلق، وإنَّ من شروط دخول الجنة الإيمان بالله وباليوم الآخر.";
      $scope.key = "s2from60to62";
      $scope.note = localStorage.getItem("s2from60to62");
      $scope.openModal();
    };

//   63-66
    $scope.s2from63to66 = function () {
      $scope.group = "63-66";
      $scope.mean = "تذكيرٌ بالنعم الربانية، إنَّ الذين لا يؤمنون بالله تعالى ومواثيقه يعرضون أنفسهم لكل عقاب.";
      $scope.key = "s2from63to66";
      $scope.note = localStorage.getItem("s2from63to66");
      $scope.openModal();
    };

//   67-73
    $scope.s2from67to73 = function () {
      $scope.group = "67-73";
      $scope.mean = "قصة بقرة بني إسرائيل، ومجادلة اليهود وعنادهم وكشف لطبائعهم.";
      $scope.key = "s2from67to73";
      $scope.note = localStorage.getItem("s2from67to73");
      $scope.openModal();
    };

//   74-75
    $scope.s2from74to75 = function () {
      $scope.group = "74-75";
      $scope.mean = "بعضٌ من صفات بني إسرائيل، إنَّ دين الله يسيرٌ ولن يشددَ الله على العباد إلا بمعاصيهم، والإعراض عن الله تعالى سببٌ في قسوة القلب وغلظة الطباع.";
      $scope.key = "s2from74to75";
      $scope.note = localStorage.getItem("s2from74to75");
      $scope.openModal();
    };

//   76-77
    $scope.s2from76to77 = function () {
      $scope.group = "76-77";
      $scope.mean = "النفاق والتقية بالباطل طبع من طبائع الشخصية اليهودية.";
      $scope.key = "s2from76to77";
      $scope.note = localStorage.getItem("s2from76to77");
      $scope.openModal();
    };

//   78-79
    $scope.s2from78to79 = function () {
      $scope.group = "78-79";
      $scope.mean = "بيان لتحريف التوراة، وتحريف كتب الله تعالى له عدة أشكال ومنه التفسير الباطل.";
      $scope.key = "s2from78to79";
      $scope.note = localStorage.getItem("s2from78to79");
      $scope.openModal();
    };

//   80-82
    $scope.s2from80to82 = function () {
      $scope.group = "80-82";
      $scope.mean = "دخول الجنة باتباع الشرع، ومقاصد كتب الله متماثلةٌ في التوحيد والدعوة إلى الخير.";
      $scope.key = "s2from80to82";
      $scope.note = localStorage.getItem("s2from80to82");
      $scope.openModal();
    };

//   83-86
    $scope.s2from83to86 = function () {
      $scope.group = "83-86";
      $scope.mean = "ذكر لمخالفة اليهود عَهْدَ الله تعالى ونقضهم للمواثيق واستحقاقهم لغضب الله.";
      $scope.key = "s2from83to86";
      $scope.note = localStorage.getItem("s2from83to86");
      $scope.openModal();
    };

//   87-88
    $scope.s2from87to88 = function () {
      $scope.group = "87-88";
      $scope.mean = "التحريف العملي للتوراة عند اليهود وذلك بالالتفاف الخفي والمخالفة الصريحة.";
      $scope.key = "s2from87to88";
      $scope.note = localStorage.getItem("s2from87to88");
      $scope.openModal();
    };

//   89-90
    $scope.s2from89to90 = function () {
      $scope.group = "89-90";
      $scope.mean = "تكبر اليهود وكفرهم بمحمد ﷺ، ومعرفة اليهود للقرآن كانت يقيناً.";
      $scope.key = "s2from89to90";
      $scope.note = localStorage.getItem("s2from89to90");
      $scope.openModal();
    };

//   91-93
    $scope.s2from91to93 = function () {
      $scope.group = "91-93";
      $scope.mean = "أكاذيب اليهود وقتلهم لأنبياءهم.";
      $scope.key = "s2from91to93";
      $scope.note = localStorage.getItem("s2from91to93");
      $scope.openModal();
    };

//   94-96
    $scope.s2from94to96 = function () {
      $scope.group = "94-96";
      $scope.mean = "حبُّ اليهود حياتهم الدنيا وحرصهم عليها، والدنيا سجنٌ للمؤمن وجنةٌ للكافر.";
      $scope.key = "s2from94to96";
      $scope.note = localStorage.getItem("s2from94to96");
      $scope.openModal();
    };

//   97-98
    $scope.s2from97to98 = function () {
      $scope.group = "97-98";
      $scope.mean = "عداوة اليهود للملائكة والرسل عداوة الباطل للحق، وإنَّ الذين يعادون أولياء الله قد آذنهم الله بحربه.";
      $scope.key = "s2from97to98";
      $scope.note = localStorage.getItem("s2from97to98");
      $scope.openModal();
    };

//   99-101
    $scope.s2from99to101 = function () {
      $scope.group = "99-101";
      $scope.mean = "بيان لعدم وفاء اليهود بالعهود، وبشارةٌ بمحمد ﷺ.";
      $scope.key = "s2from99to101";
      $scope.note = localStorage.getItem("s2from99to101");
      $scope.openModal();
    };

//   102-103
    $scope.s2from102to103 = function () {
      $scope.group = "102-103";
      $scope.mean = "عصمة سليمان عليه الصلاة والسلام مما نسب إليه.";
      $scope.key = "s2from102to103";
      $scope.note = localStorage.getItem("s2from102to103");
      $scope.openModal();
    };

//   104-105
    $scope.s2from104to105 = function () {
      $scope.group = "104-105";
      $scope.mean = "استقامة الأمة الإسلامية، وكشف مكائد اليهود، ومن طبيعة الكافر حب الشر للآخرين.";
      $scope.key = "s2from104to105";
      $scope.note = localStorage.getItem("s2from104to105");
      $scope.openModal();
    };

//   106-108
    $scope.s2from106to108 = function () {
      $scope.group = "106-108";
      $scope.mean = "النسخ في القرآن، والله المتصرف بما يريد، يتصرف بملكه بما يشاء، والرد على اليهود.";
      $scope.key = "s2from106to108";
      $scope.note = localStorage.getItem("s2from106to108");
      $scope.openModal();
    };

//   109-110
    $scope.s2from109to110 = function () {
      $scope.group = "109-110";
      $scope.mean = "حقيقة أهل الكتاب وخبث نفوسهم، والاعتراض على الله نهايته الكفر ثم عذاب جهنم.";
      $scope.key = "s2from109to110";
      $scope.note = localStorage.getItem("s2from109to110");
      $scope.openModal();
    };

//   111-112
    $scope.s2from111to112 = function () {
      $scope.group = "111-112";
      $scope.mean = "افتراءات اليهود والنصارى وأمانيهم، ودخول الجنة بالإيمان والعمل الصالح.";
      $scope.key = "s2from111to112";
      $scope.note = localStorage.getItem("s2from111to112");
      $scope.openModal();
    };

//   113
    $scope.s2from113 = function () {
      $scope.group = "113";
      $scope.mean = "دعوى بلا دليل، والدعوى بلا دليل ظلمٌ يعود أذاه على صاحبها.";
      $scope.key = "s2from113";
      $scope.note = localStorage.getItem("s2from113");
      $scope.openModal();
    };

//   114-115
    $scope.s2from114to115 = function () {
      $scope.group = "114-115";
      $scope.mean = "حرمة المساجد، وعبادة الله تعالى أمانٌ للبشر، والذي ينشر الخوف يصاب به.";
      $scope.key = "s2from114to115";
      $scope.note = localStorage.getItem("s2from114to115");
      $scope.openModal();
    };

//   116-119
    $scope.s2from116to119 = function () {
      $scope.group = "116-119";
      $scope.mean = "افتراءات المشركين على الله، ومنهج الكفار في الإعراض عن الله سبحانه.";
      $scope.key = "s2from116to119";
      $scope.note = localStorage.getItem("s2from116to119");
      $scope.openModal();
    };

//   120-121
    $scope.s2from120to121 = function () {
      $scope.group = "120-121";
      $scope.mean = "تحذير من اتباع اليهود والنصارى، والتعصب الأعمى ليس دليلاً على الحق.";
      $scope.key = "s2from120to121";
      $scope.note = localStorage.getItem("s2from120to121");
      $scope.openModal();
    };

//   122-123
    $scope.s2from122to123 = function () {
      $scope.group = "122-123";
      $scope.mean = "تحذير من اتباع اليهود والنصارى، والتعصب الأعمى ليس دليلاً على الحق.";
      $scope.key = "s2from122to123";
      $scope.note = localStorage.getItem("s2from122to123");
      $scope.openModal();
    };

//   122-123
    $scope.s2from122to123 = function () {
      $scope.group = "122-123";
      $scope.mean = "بيان فضل الله على بني إسرائيل، وتذكير بخصوصية الحساب يوم الدين.";
      $scope.key = "s2from122to123";
      $scope.note = localStorage.getItem("s2from122to123");
      $scope.openModal();
    };

//   124-129
    $scope.s2from124to129 = function () {
      $scope.group = "124-129";
      $scope.mean = "مقام إبراهيم عليه السلام أبو الأنبياء، والبيت الحرام قبلة العبادة لأهل الأرض جميعاً، وبناء إبراهيم عليه السلام للكعبة المشرفة ودعاؤه عندها.";
      $scope.key = "s2from124to129";
      $scope.note = localStorage.getItem("s2from124to129");
      $scope.openModal();
    };

//   130-134
    $scope.s2from130to134 = function () {
      $scope.group = "130-134";
      $scope.mean = "التأكيد على اتباع ملة إبراهيم عليه السلام وهي الاسلام والتوبيخ لمن ابتعد عنها.";
      $scope.key = "s2from130to134";
      $scope.note = localStorage.getItem("s2from130to134");
      $scope.openModal();
    };

//   135-138
    $scope.s2from135to138 = function () {
      $scope.group = "135-138";
      $scope.mean = "بطلان دعوى اليهود والنصارى باتباع ملتهم، وبيان بأن الإسلام هو الدين الحق.";
      $scope.key = "s2from135to138";
      $scope.note = localStorage.getItem("s2from135to138");
      $scope.openModal();
    };

//   139-141
    $scope.s2from139to141 = function () {
      $scope.group = "139-141";
      $scope.mean = "رد على اليهود والنصارى، والحق هو في طاعة الله واتباعه واتباع رسله.";
      $scope.key = "s2from139to141";
      $scope.note = localStorage.getItem("s2from139to141");
      $scope.openModal();
    };

//   142-145
    $scope.s2from142to145 = function () {
      $scope.group = "142-145";
      $scope.mean = "مناقشة قضية تحويل القبلة، والتألي على الله فيما لا علم لنا به نوعٌ من السفاهة وقلة الحكمة، وإن البيت الحرام مذكور بالعظمة في الكتب السابقة.";
      $scope.key = "s2from142to145";
      $scope.note = localStorage.getItem("s2from142to145");
      $scope.openModal();
    };

//   146-150
    $scope.s2from146to150 = function () {
      $scope.group = "146-150";
      $scope.mean = "كتمان أهل الكتاب للحق، ومخالفتهم للرسول ﷺ.";
      $scope.key = "s2from146to150";
      $scope.note = localStorage.getItem("s2from146to150");
      $scope.openModal();
    };

//   151-153
    $scope.s2from151to153 = function () {
      $scope.group = "151-153";
      $scope.mean = "منةٌ من الله على المؤمنين ببعثة النبي محمد ﷺ، وقراءةُ القرآن تكفي للتزكية في هذه الأمة.";
      $scope.key = "s2from151to153";
      $scope.note = localStorage.getItem("s2from151to153");
      $scope.openModal();
    };

//   154-157
    $scope.s2from154to157 = function () {
      $scope.group = "154-157";
      $scope.mean = "بشاراتٌ ربانية للمؤمنين، والإيمان بالله يعين على الصبر، والإيمان بالقدر من أركان الإيمان.";
      $scope.key = "s2from154to157";
      $scope.note = localStorage.getItem("s2from154to157");
      $scope.openModal();
    };

//   158
    $scope.s2from158 = function () {
      $scope.group = "158";
      $scope.mean = "الحج عبادة لله، والعبادة وهيئتُها تشريع من الله تعالى وهو الذي يقبلها أو يردُّها.";
      $scope.key = "s2from158";
      $scope.note = localStorage.getItem("s2from158");
      $scope.openModal();
    };

//   159-162
    $scope.s2from159to162 = function () {
      $scope.group = "159-162";
      $scope.mean = "بيان لفضيلة نشر العلم وعدم كتمانه، واللعنة والجحيم من الله على من يشرك به.";
      $scope.key = "s2from159to162";
      $scope.note = localStorage.getItem("s2from159to162");
      $scope.openModal();
    };

//   163-164
    $scope.s2from163to164 = function () {
      $scope.group = "163-164";
      $scope.mean = "حبُ الله تعالى ودوافعه الكونية.";
      $scope.key = "s2from163to164";
      $scope.note = localStorage.getItem("s2from163to164");
      $scope.openModal();
    };

//   165-167
    $scope.s2from165to167 = function () {
      $scope.group = "165-167";
      $scope.mean = "سوء عاقبة المشركين بعبادتهم غير الله، وكل من اتبع أحداً دون الله سيتبرأ منه يوم القيامة.";
      $scope.key = "s2from165to167";
      $scope.note = localStorage.getItem("s2from165to167");
      $scope.openModal();
    };

//   168-169
    $scope.s2from168to169 = function () {
      $scope.group = "168-169";
      $scope.mean = "من نعم الله تعالى على جميع الخلق، وأهل الباطل أهل بغضاء وعداوة.";
      $scope.key = "s2from168to169";
      $scope.note = localStorage.getItem("s2from168to169");
      $scope.openModal();
    };

//   170-171
    $scope.s2from170to171 = function () {
      $scope.group = "170-171";
      $scope.mean = "عدم اتباع المشركين للإسلام، والحق لا يُعرف بالأشخاص.";
      $scope.key = "s2from170to171";
      $scope.note = localStorage.getItem("s2from170to171");
      $scope.openModal();
    };

//   172-173
    $scope.s2from172to173 = function () {
      $scope.group = "172-173";
      $scope.mean = "التحريم خاص والإباحة عامة وآيات من الله في تحريم أطعمة ذات ضرر.";
      $scope.key = "s2from172to173";
      $scope.note = localStorage.getItem("s2from172to173");
      $scope.openModal();
    };

//   174-176
    $scope.s2from174to176 = function () {
      $scope.group = "174-176";
      $scope.mean = "كتمان الحق نوع من الكبر يبوء صاحبه بغضب الله وعقابه.";
      $scope.key = "s2from174to176";
      $scope.note = localStorage.getItem("s2from174to176");
      $scope.openModal();
    };

//   177
    $scope.s2from177 = function () {
      $scope.group = "177";
      $scope.mean = "مبدأ البر، والتقوى والبر هي معانٍ وأعمال وليست صورٌ وأشكال.";
      $scope.key = "s2from177";
      $scope.note = localStorage.getItem("s2from177");
      $scope.openModal();
    };

//   178-179
    $scope.s2from178to179 = function () {
      $scope.group = "178-179";
      $scope.mean = "القِصَاص وتشريعه والحكمة منه، والقصاص هو سبب لحماية الحياة الإنسانية.";
      $scope.key = "s2from178to179";
      $scope.note = localStorage.getItem("s2from178to179");
      $scope.openModal();
    };

//   180-182
    $scope.s2from180to182 = function () {
      $scope.group = "180-182";
      $scope.mean = "تشريع الوصية والميراث، والأقربون هم أولى الناس بقريبهم فيما تركه من ميراث.";
      $scope.key = "s2from180to182";
      $scope.note = localStorage.getItem("s2from180to182");
      $scope.openModal();
    };

//   183-186
    $scope.s2from183to186 = function () {
      $scope.group = "183-186";
      $scope.mean = "تشريعات ربانية في الصيام وبيان لأحكامه، والصيام عبادة في شرائع الله جميعاً.";
      $scope.key = "s2from183to186";
      $scope.note = localStorage.getItem("s2from183to186");
      $scope.openModal();
    };

//   187
    $scope.s2from187 = function () {
      $scope.group = "187";
      $scope.mean = "تشريعات ربانية في الصيام، ورحمة الله لهذه الأمة أساس التشريع الرباني الأخير.";
      $scope.key = "s2from187";
      $scope.note = localStorage.getItem("s2from187");
      $scope.openModal();
    };

//   188
    $scope.s2from188 = function () {
      $scope.group = "188";
      $scope.mean = "تعظيم حرمة مال المسلم، والذي يأكل المال الحرام هو الأدنى.";
      $scope.key = "s2from188";
      $scope.note = localStorage.getItem("s2from188");
      $scope.openModal();
    };

//   189
    $scope.s2from189 = function () {
      $scope.group = "189";
      $scope.mean = "أجوبة في الحج، والأهلَّة هي مواقيت للعبادة.";
      $scope.key = "s2from189";
      $scope.note = localStorage.getItem("s2from189");
      $scope.openModal();
    };

//   190-194
    $scope.s2from190to194 = function () {
      $scope.group = "190-194";
      $scope.mean = "تشريعات في القتال، ثم تشريعات جهادية لحماية الدين الحق في حال أي خطر متوقع عليه، والمعاملة بالمثل حق ولا ينبغي الزيادة عليه إلا بإحسان.";
      $scope.key = "s2from190to194";
      $scope.note = localStorage.getItem("s2from190to194");
      $scope.openModal();
    };

//   195
    $scope.s2from195 = function () {
      $scope.group = "195";
      $scope.mean = "الصدقة في التشريع الإسلامي، والإنفاق في سبيل الله صنو الشهادة والقتال وهما ثمن الجنة.";
      $scope.key = "s2from195";
      $scope.note = localStorage.getItem("s2from195");
      $scope.openModal();
    };

//   196-203
    $scope.s2from196to203 = function () {
      $scope.group = "196-203";
      $scope.mean = "تشريعات في الحج والعمرة، الإحصار وحج التمتع ورخص الحج، وأيام التشريق وذكر الله فيها كثيراً، مؤتمر الحج برهانٌ على سمو هذه الأمة.";
      $scope.key = "s2from196to203";
      $scope.note = localStorage.getItem("s2from196to203");
      $scope.openModal();
    };

//   204-207
    $scope.s2from204to207 = function () {
      $scope.group = "204-207";
      $scope.mean = "مثل الصلاح والفساد، وإن الله لا ينظر إلى صور عباده بل إلى صدورهم وقلوبهم.";
      $scope.key = "s2from204to207";
      $scope.note = localStorage.getItem("s2from204to207");
      $scope.openModal();
    };

//   208-210
    $scope.s2from208to210 = function () {
      $scope.group = "208-210";
      $scope.mean = "دعوة إلى المؤمنين للدخول في طاعة الله، وتحذير من معصية الله.";
      $scope.key = "s2from208to210";
      $scope.note = localStorage.getItem("s2from208to210");
      $scope.openModal();
    };

//   211-212
    $scope.s2from211to212 = function () {
      $scope.group = "211-212";
      $scope.mean = "تذكيرٌ ببني إسرائيل، والمثل ينفع للعظة والعبرة.";
      $scope.key = "s2from211to212";
      $scope.note = localStorage.getItem("s2from211to212");
      $scope.openModal();
    };

//   213-214
    $scope.s2from213to214 = function () {
      $scope.group = "213-214";
      $scope.mean = "إرسال الرسل إلى البشر، وحاجة البشر إليهم، وصبر الرسل وأتباعهم على الأذى.";
      $scope.key = "s2from213to214";
      $scope.note = localStorage.getItem("s2from213to214");
      $scope.openModal();
    };

//   215
    $scope.s2from215 = function () {
      $scope.group = "215";
      $scope.mean = "أحكام النفقة وبيان المستحقين لها، والنفقة هي من أصناف الابتلاء وسببٌ في النصر.";
      $scope.key = "s2from215";
      $scope.note = localStorage.getItem("s2from215");
      $scope.openModal();
    };

//   216-218
    $scope.s2from216to218 = function () {
      $scope.group = "216-218";
      $scope.mean = "مشروعية القتال وأحكامه.";
      $scope.key = "s2from216to218";
      $scope.note = localStorage.getItem("s2from216to218");
      $scope.openModal();
    };

//   219
    $scope.s2from219 = function () {
      $scope.group = "219";
      $scope.mean = "أحكام في الخمر والميسر، ومحو السيء والاتصاف بالخير.";
      $scope.key = "s2from219";
      $scope.note = localStorage.getItem("s2from219");
      $scope.openModal();
    };

//   220-221
    $scope.s2from220to221 = function () {
      $scope.group = "220-221";
      $scope.mean = "تكافل المجتمع المسلم، والتربية النفسية في الإسلام تنشأ من الداخل، والولاء في المجتمع المسلم (لله تعالى وحده ولمن آمن به) وأحكام في الزواج من المشركين.";
      $scope.key = "s2from220to221";
      $scope.note = localStorage.getItem("s2from220to221");
      $scope.openModal();
    };

//   222-223
    $scope.s2from222to223 = function () {
      $scope.group = "222-223";
      $scope.mean = "أحكام الحيض، والطهارة في الحياة الأسرية شاملة حساً ومعنى.";
      $scope.key = "s2from222to223";
      $scope.note = localStorage.getItem("s2from222to223");
      $scope.openModal();
    };

//   224-225
    $scope.s2from224to225 = function () {
      $scope.group = "224-225";
      $scope.mean = "أحكام اليمين وتعظيم الله تعالى.";
      $scope.key = "s2from224to225";
      $scope.note = localStorage.getItem("s2from224to225");
      $scope.openModal();
    };

//   226-227
    $scope.s2from226to227 = function () {
      $scope.group = "226-227";
      $scope.mean = "بيان أحكام الإيلاء.";
      $scope.key = "s2from226to227";
      $scope.note = localStorage.getItem("s2from226to227");
      $scope.openModal();
    };

//   228-230
    $scope.s2from228to230 = function () {
      $scope.group = "228-230";
      $scope.mean = "تشريعات في الطلاق وتبعاته وتماسك المجتمع المسلم هدفٌ من أهداف التعليمات القرآنية.";
      $scope.key = "s2from228to230";
      $scope.note = localStorage.getItem("s2from228to230");
      $scope.openModal();
    };

//   231-232
    $scope.s2from231to232 = function () {
      $scope.group = "231-232";
      $scope.mean = "معاملة المطلقات، وتدل الآيات على أن مراقبة الله تعالى هي التي تسير المسلم في السر والعلن.";
      $scope.key = "s2from231to232";
      $scope.note = localStorage.getItem("s2from231to232");
      $scope.openModal();
    };

//   233
    $scope.s2from233 = function () {
      $scope.group = "233";
      $scope.mean = "أحكام في الرضاعة والنفقة.";
      $scope.key = "s2from233";
      $scope.note = localStorage.getItem("s2from233");
      $scope.openModal();
    };

//   234-237
    $scope.s2from234to237 = function () {
      $scope.group = "234-237";
      $scope.mean = "في ثبوت عدة المتوفى عنها زوجها، والحفاظ على الأسرة والوفاء للزوج شيء ثمين في شرع الله، والاستقلال المادي للمرأة هو من إكرام الإسلام للمرأة، ووجوب نصف المهر قبل الدخول.";
      $scope.key = "s2from234to237";
      $scope.note = localStorage.getItem("s2from234to237");
      $scope.openModal();
    };

//   238-239
    $scope.s2from238to239 = function () {
      $scope.group = "238-239";
      $scope.mean = "من أحكام الصلاة وآدابها، والحفاظ على الصلوات له أثر عظيم في الحياة الفردية والاجتماعية، والحفاظ على الصلوات مطلوب مدى استقرار الروح في الجسد.";
      $scope.key = "s2from238to239";
      $scope.note = localStorage.getItem("s2from238to239");
      $scope.openModal();
    };

//   240-242
    $scope.s2from240to242 = function () {
      $scope.group = "240-242";
      $scope.mean = "تشريعات في الطلاق، عدة المتوفي عنها زوجها ومتعة المطلَّقة.";
      $scope.key = "s2from240to242";
      $scope.note = localStorage.getItem("s2from240to242");
      $scope.openModal();
    };

//   243-245
    $scope.s2from243to245 = function () {
      $scope.group = "243-245";
      $scope.mean = "بيان جهادي من زمن بني إسرائيل، والإنفاق من المال صنو الجهاد في سبيل الله.";
      $scope.key = "s2from243to245";
      $scope.note = localStorage.getItem("s2from243to245");
      $scope.openModal();
    };

//   246
    $scope.s2from246 = function () {
      $scope.group = "246";
      $scope.mean = "العبرة من بني إسرائيل في كل شيء من خصائص سورة البقرة لهذه الأمة المسلمة.";
      $scope.key = "s2from246";
      $scope.note = localStorage.getItem("s2from246");
      $scope.openModal();
    };

//   247-248
    $scope.s2from247to248 = function () {
      $scope.group = "247-248";
      $scope.mean = "جعل الله طالوت ملكاً على بني إسرائيل ليجاهدوا في سبيل الله، ومجادلة بني إسرائيل فيه.";
      $scope.key = "s2from247to248";
      $scope.note = localStorage.getItem("s2from247to248");
      $scope.openModal();
    };

//   249-252
    $scope.s2from249to252 = function () {
      $scope.group = "249-252";
      $scope.mean = "متابعة البيان الجهادي واختبار الله تعالى لجنود طالوت بالنهر وانتصار الفئة القليلة وقتل داود عليه السلام لجالوت، والصبر هو من عوامل النصر الأولى.";
      $scope.key = "s2from249to252";
      $scope.note = localStorage.getItem("s2from249to252");
      $scope.openModal();
    };

//   253-254
    $scope.s2from253to254 = function () {
      $scope.group = "253-254";
      $scope.mean = "الهداية بالرسل والرسالات، والاختلاف من طبائع النفوس البشرية، ودعوة للإنفاق في سبيل الله.";
      $scope.key = "s2from253to254";
      $scope.note = localStorage.getItem("s2from253to254");
      $scope.openModal();
    };

//   255
    $scope.s2from255 = function () {
      $scope.group = "255";
      $scope.mean = "آية الكرسي، والعقيدة الإسلامية وأثارها، والإيمان بالله تعالى أعظم غاية في الوجود.";
      $scope.key = "s2from255";
      $scope.note = localStorage.getItem("s2from255");
      $scope.openModal();
    };

//   256
    $scope.s2from256 = function () {
      $scope.group = "256";
      $scope.mean = "الدخول في الاسلام يتم عن طريق الإرادة والتفكير لا عن طريق الإجبار.";
      $scope.key = "s2from256";
      $scope.note = localStorage.getItem("s2from256");
      $scope.openModal();
    };

//   257
    $scope.s2from257 = function () {
      $scope.group = "257";
      $scope.mean = "المؤمنون يتولاهم الله والكافرون أولياء الشيطان.";
      $scope.key = "s2from257";
      $scope.note = localStorage.getItem("s2from257");
      $scope.openModal();
    };

//   258
    $scope.s2from258 = function () {
      $scope.group = "258";
      $scope.mean = "مجادلة النمرود لإبراهيم عليه السلام، وأمثلة على قدرة الله تعالى.";
      $scope.key = "s2from258";
      $scope.note = localStorage.getItem("s2from258");
      $scope.openModal();
    };

//   259
    $scope.s2from259 = function () {
      $scope.group = "259";
      $scope.mean = "قصة الذي مر على القرية، والطاعة لله لا حد لها والمعصية والكفر ظلماتٌ تفضي إلى النار.";
      $scope.key = "s2from259";
      $scope.note = localStorage.getItem("s2from259");
      $scope.openModal();
    };

//   260
    $scope.s2from260 = function () {
      $scope.group = "260";
      $scope.mean = "إبراهيم عليه السلام وقدرة الله في إحياء الموتى.";
      $scope.key = "s2from260";
      $scope.note = localStorage.getItem("s2from260");
      $scope.openModal();
    };

//   261-264
    $scope.s2from261to264 = function () {
      $scope.group = "261-264";
      $scope.mean = "أهمية الإنفاق في سبيل الله، والإنفاق في سبيل الله أجره عظيم لا يعلمه إلا الله.";
      $scope.key = "s2from261to264";
      $scope.note = localStorage.getItem("s2from261to264");
      $scope.openModal();
    };

//   265-266
    $scope.s2from265to266 = function () {
      $scope.group = "265-266";
      $scope.mean = "الإنفاق في سبيل الله يعود خيره على المجتمع كله وينفع الإنسان في ذريته.";
      $scope.key = "s2from265to266";
      $scope.note = localStorage.getItem("s2from265to266");
      $scope.openModal();
    };

//   267-269
    $scope.s2from267to269 = function () {
      $scope.group = "267-269";
      $scope.mean = "الإنفاق في سبيل الله لا يقبل إلا إذا كان حلالاً طيباً ويجب إخفاؤه عن الناس.";
      $scope.key = "s2from267to269";
      $scope.note = localStorage.getItem("s2from267to269");
      $scope.openModal();
    };

//   270-271
    $scope.s2from270to271 = function () {
      $scope.group = "270-271";
      $scope.mean = "صدقة السر خير من صدقة العلانية، والله لا يخفى عليه شيء.";
      $scope.key = "s2from270to271";
      $scope.note = localStorage.getItem("s2from270to271");
      $scope.openModal();
    };

//   272-274
    $scope.s2from272to274 = function () {
      $scope.group = "272-274";
      $scope.mean = "الهداية من الله، ومن الحكمة في الصدقة أن تبحث عن أصحاب الحاجة الحقيقية، والصدقة قوة في الروح والنفس والجسد.";
      $scope.key = "s2from272to274";
      $scope.note = localStorage.getItem("s2from272to274");
      $scope.openModal();
    };

//   275-276
    $scope.s2from275to276 = function () {
      $scope.group = "275-276";
      $scope.mean = "تشريعات في تحريم الربا، أكل الربا إثم عظيم ومرض روحي وعقلي على من يتعاطاه، والربا نهايته الخراب والدمار لعلة الشح والظلم.";
      $scope.key = "s2from275to276";
      $scope.note = localStorage.getItem("s2from275to276");
      $scope.openModal();
    };

//   277-281
    $scope.s2from277to281 = function () {
      $scope.group = "277-281";
      $scope.mean = "تنبيه المؤمن إلى العمل الصالح والابتعاد عن المكاسب الخبيثة.";
      $scope.key = "s2from277to281";
      $scope.note = localStorage.getItem("s2from277to281");
      $scope.openModal();
    };

//   282-283
    $scope.s2from282to283 = function () {
      $scope.group = "282-283";
      $scope.mean = "أحكام الدَّيْن، وتشريع في مصالح العباد ورعاية حقوقهم، والإشهاد على الدَّيْن سنة ربانية، والنسيان من طبع الإنسان، والضرر ليس من شرع الله بل هو فسوق وانحراف.";
      $scope.key = "s2from282to283";
      $scope.note = localStorage.getItem("s2from282to283");
      $scope.openModal();
    };

//   284-286
    $scope.s2from284to286 = function () {
      $scope.group = "284-286";
      $scope.mean = "الرحمة في الحساب الرباني، والإيمان بالله رأس أركان الإيمان، ومن رحمة الله وكرمه أَنْ حط عنا ماليس بمقدورنا وجعلنا نلتجئ إليه دوماً.";
      $scope.key = "s2from284to286";
      $scope.note = localStorage.getItem("s2from284to286");
      $scope.openModal();
    };
    
  })

////////////// سورة آل عمران //////////////
// تحتاج تعديل
  .controller("The3Ctrl", function ($scope, $ionicModal) {
    $scope.note = " ";
    $scope.addNesDesc = function (key, data) {
//      alert(key);
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
//  1 to 7
    $scope.d0e4fc = function () {
      $scope.key = "d0e4fc";
      $scope.note = localStorage.getItem("d0e4fc"); // take the data from local storage
      $scope.openModal();
    };
//  8 to 9
    $scope.b4a4be = function () {
      $scope.key = "b4a4be";
      $scope.note = localStorage.getItem("b4a4be");
      $scope.openModal();
    };
//  10 to 13
    $scope.f2bed0 = function () {
      $scope.key = "f2bed0";
      $scope.note = localStorage.getItem("f2bed0");
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

////////////// سورة النساء //////////////
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

  })

  .controller("PlaylistCtrl", function ($scope, $stateParams) {});
