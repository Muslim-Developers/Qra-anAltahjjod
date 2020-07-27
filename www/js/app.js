// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular
  .module("starter", ["ionic", "starter.controllers"])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state("app", {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl",
      })

      .state("app.playlists", {
        url: "/playlists",
        views: {
          menuContent: {
            templateUrl: "templates/playlists.html",
            controller: "PlaylistsCtrl",
          },
        },
      })
	  
      .state("app.1", {
        url: "/1",
        views: {
          menuContent: {
            templateUrl: "templates/1.html",
          },
        },
      })
	  
      .state("app.2", {
        url: "/2",
        views: {
          menuContent: {
            templateUrl: "templates/2.html",
          },
        },
      })

      .state("app.3", {
        url: "/3",
        views: {
          menuContent: {
            templateUrl: "templates/3.html",
            controller: "The3Ctrl",
          },
        },
      })

      .state("app.modal", {
        url: "/modal",
        views: {
          menuContent: {
            templateUrl: "templates/modal.html",
            controller: "The3Ctrl",
          },
        },
      })

      .state("app.4", {
        url: "/4",
        views: {
          menuContent: {
            templateUrl: "templates/4.html",
            controller: "The4Ctrl",
          },
        },
      })

      .state("app.5", {
        url: "/5",
        views: {
          menuContent: {
            templateUrl: "templates/5.html",
            controller: "The5Ctrl",
          },
        },
      })

      .state("app.6", {
        url: "/6",
        views: {
          menuContent: {
            templateUrl: "templates/6.html",
            controller: "The6Ctrl",
          },
        },
      })
	  
      .state("app.7", {
        url: "/7",
        views: {
          menuContent: {
            templateUrl: "templates/7.html",
          },
        },
      })

      .state("app.8", {
        url: "/8",
        views: {
          menuContent: {
            templateUrl: "templates/8.html",
          },
        },
      })

      .state("app.9", {
        url: "/9",
        views: {
          menuContent: {
            templateUrl: "templates/9.html",
          },
        },
      })

      .state("app.10", {
        url: "/10",
        views: {
          menuContent: {
            templateUrl: "templates/10.html",
          },
        },
      })

      .state("app.11", {
        url: "/11",
        views: {
          menuContent: {
            templateUrl: "templates/11.html",
            controller: "The11Ctrl",
          },
        },
      })

      .state("app.12", {
        url: "/12",
        views: {
          menuContent: {
            templateUrl: "templates/12.html",
          },
        },
      })

      .state("app.13", {
        url: "/13",
        views: {
          menuContent: {
            templateUrl: "templates/13.html",
          },
        },
      })

      .state("app.14", {
        url: "/14",
        views: {
          menuContent: {
            templateUrl: "templates/14.html",
          },
        },
      })

      .state("app.15", {
        url: "/15",
        views: {
          menuContent: {
            templateUrl: "templates/15.html",
          },
        },
      })

      .state("app.16", {
        url: "/16",
        views: {
          menuContent: {
            templateUrl: "templates/16.html",
          },
        },
      })

      .state("app.17", {
        url: "/17",
        views: {
          menuContent: {
            templateUrl: "templates/17.html",
            controller: "The17Ctrl",
          },
        },
      })

      .state("app.18", {
        url: "/18",
        views: {
          menuContent: {
            templateUrl: "templates/18.html",
          },
        },
      })
      .state("app.19", {
        url: "/19",
        views: {
          menuContent: {
            templateUrl: "templates/19.html",
          },
        },
      })
      .state("app.20", {
        url: "/20",
        views: {
          menuContent: {
            templateUrl: "templates/20.html",
          },
        },
      })

      .state("app.21", {
        url: "/21",
        views: {
          menuContent: {
            templateUrl: "templates/21.html",
          },
        },
      })

      .state("app.22", {
        url: "/22",
        views: {
          menuContent: {
            templateUrl: "templates/22.html",
          },
        },
      })

      .state("app.23", {
        url: "/23",
        views: {
          menuContent: {
            templateUrl: "templates/23.html",
          },
        },
      })

      .state("app.24", {
        url: "/24",
        views: {
          menuContent: {
            templateUrl: "templates/24.html",
          },
        },
      })

      .state("app.25", {
        url: "/25",
        views: {
          menuContent: {
            templateUrl: "templates/25.html",
          },
        },
      })

      .state("app.26", {
        url: "/26",
        views: {
          menuContent: {
            templateUrl: "templates/26.html",
          },
        },
      })

      .state("app.27", {
        url: "/27",
        views: {
          menuContent: {
            templateUrl: "templates/27.html",
          },
        },
      })

      .state("app.28", {
        url: "/28",
        views: {
          menuContent: {
            templateUrl: "templates/28.html",
          },
        },
      })

      .state("app.29", {
        url: "/29",
        views: {
          menuContent: {
            templateUrl: "templates/29.html",
          },
        },
      })

      .state("app.30", {
        url: "/30",
        views: {
          menuContent: {
            templateUrl: "templates/30.html",
          },
        },
      })

      .state("app.31", {
        url: "/31",
        views: {
          menuContent: {
            templateUrl: "templates/31.html",
          },
        },
      })

      .state("app.32", {
        url: "/32",
        views: {
          menuContent: {
            templateUrl: "templates/32.html",
          },
        },
      })

      .state("app.33", {
        url: "/33",
        views: {
          menuContent: {
            templateUrl: "templates/33.html",
          },
        },
      })

      .state("app.34", {
        url: "/34",
        views: {
          menuContent: {
            templateUrl: "templates/34.html",
          },
        },
      })

      .state("app.35", {
        url: "/35",
        views: {
          menuContent: {
            templateUrl: "templates/35.html",
          },
        },
      })
	  
      .state("app.36", {
        url: "/36",
        views: {
          menuContent: {
            templateUrl: "templates/36.html",
          },
        },
      })
      
      .state("app.37", {
        url: "/37",
        views: {
          menuContent: {
            templateUrl: "templates/37.html",
          },
        },
      })
      
      .state("app.38", {
        url: "/38",
        views: {
          menuContent: {
            templateUrl: "templates/38.html",
          },
        },
      })
      
      .state("app.39", {
        url: "/39",
        views: {
          menuContent: {
            templateUrl: "templates/39.html",
          },
        },
      })
      
      .state("app.40", {
        url: "/40",
        views: {
          menuContent: {
            templateUrl: "templates/40.html",
          },
        },
      })
	  
      .state("app.41", {
        url: "/41",
        views: {
          menuContent: {
            templateUrl: "templates/41.html",
          },
        },
      })
      .state("app.42", {
        url: "/42",
        views: {
          menuContent: {
            templateUrl: "templates/42.html",
          },
        },
      })
      .state("app.43", {
        url: "/43",
        views: {
          menuContent: {
            templateUrl: "templates/43.html",
          },
        },
      })
      .state("app.44", {
        url: "/44",
        views: {
          menuContent: {
            templateUrl: "templates/44.html",
          },
        },
      })
      .state("app.45", {
        url: "/45",
        views: {
          menuContent: {
            templateUrl: "templates/45.html",
          },
        },
      })
      .state("app.46", {
        url: "/46",
        views: {
          menuContent: {
            templateUrl: "templates/46.html",
          },
        },
      })
      .state("app.47", {
        url: "/47",
        views: {
          menuContent: {
            templateUrl: "templates/47.html",
          },
        },
      })
      .state("app.48", {
        url: "/48",
        views: {
          menuContent: {
            templateUrl: "templates/48.html",
          },
        },
      })
      .state("app.49", {
        url: "/49",
        views: {
          menuContent: {
            templateUrl: "templates/49.html",
          },
        },
      })
      .state("app.50", {
        url: "/50",
        views: {
          menuContent: {
            templateUrl: "templates/50.html",
          },
        },
      })
      .state("app.51", {
        url: "/51",
        views: {
          menuContent: {
            templateUrl: "templates/51.html",
          },
        },
      })
      .state("app.52", {
        url: "/52",
        views: {
          menuContent: {
            templateUrl: "templates/52.html",
          },
        },
      })
      .state("app.53", {
        url: "/53",
        views: {
          menuContent: {
            templateUrl: "templates/53.html",
          },
        },
      })
      .state("app.54", {
        url: "/54",
        views: {
          menuContent: {
            templateUrl: "templates/54.html",
          },
        },
      })
      .state("app.55", {
        url: "/55",
        views: {
          menuContent: {
            templateUrl: "templates/55.html",
          },
        },
      })
      .state("app.56", {
        url: "/56",
        views: {
          menuContent: {
            templateUrl: "templates/56.html",
          },
        },
      })
      .state("app.57", {
        url: "/57",
        views: {
          menuContent: {
            templateUrl: "templates/57.html",
          },
        },
      })
      .state("app.58", {
        url: "/58",
        views: {
          menuContent: {
            templateUrl: "templates/58.html",
          },
        },
      })
      .state("app.59", {
        url: "/59",
        views: {
          menuContent: {
            templateUrl: "templates/59.html",
          },
        },
      })
      .state("app.60", {
        url: "/60",
        views: {
          menuContent: {
            templateUrl: "templates/60.html",
          },
        },
      })
      .state("app.61", {
        url: "/61",
        views: {
          menuContent: {
            templateUrl: "templates/61.html",
          },
        },
      })
      .state("app.62", {
        url: "/62",
        views: {
          menuContent: {
            templateUrl: "templates/62.html",
          },
        },
      })
      .state("app.63", {
        url: "/63",
        views: {
          menuContent: {
            templateUrl: "templates/63.html",
          },
        },
      })
      .state("app.64", {
        url: "/64",
        views: {
          menuContent: {
            templateUrl: "templates/64.html",
          },
        },
      })
      .state("app.65", {
        url: "/65",
        views: {
          menuContent: {
            templateUrl: "templates/65.html",
          },
        },
      })
      .state("app.66", {
        url: "/66",
        views: {
          menuContent: {
            templateUrl: "templates/66.html",
          },
        },
      })
      .state("app.67", {
        url: "/67",
        views: {
          menuContent: {
            templateUrl: "templates/67.html",
          },
        },
      })
      .state("app.68", {
        url: "/68",
        views: {
          menuContent: {
            templateUrl: "templates/68.html",
          },
        },
      })
      .state("app.69", {
        url: "/69",
        views: {
          menuContent: {
            templateUrl: "templates/69.html",
          },
        },
      })
      .state("app.70", {
        url: "/70",
        views: {
          menuContent: {
            templateUrl: "templates/70.html",
          },
        },
      })
      .state("app.71", {
        url: "/71",
        views: {
          menuContent: {
            templateUrl: "templates/71.html",
          },
        },
      })
      .state("app.72", {
        url: "/72",
        views: {
          menuContent: {
            templateUrl: "templates/72.html",
          },
        },
      })
      .state("app.73", {
        url: "/73",
        views: {
          menuContent: {
            templateUrl: "templates/73.html",
          },
        },
      })
      .state("app.74", {
        url: "/74",
        views: {
          menuContent: {
            templateUrl: "templates/74.html",
          },
        },
      })
      .state("app.75", {
        url: "/75",
        views: {
          menuContent: {
            templateUrl: "templates/75.html",
          },
        },
      })
      .state("app.76", {
        url: "/76",
        views: {
          menuContent: {
            templateUrl: "templates/76.html",
          },
        },
      })
      .state("app.77", {
        url: "/77",
        views: {
          menuContent: {
            templateUrl: "templates/77.html",
          },
        },
      })
      .state("app.78", {
        url: "/78",
        views: {
          menuContent: {
            templateUrl: "templates/78.html",
          },
        },
      })
      .state("app.79", {
        url: "/79",
        views: {
          menuContent: {
            templateUrl: "templates/79.html",
          },
        },
      })
      .state("app.80", {
        url: "/80",
        views: {
          menuContent: {
            templateUrl: "templates/80.html",
          },
        },
      })
      .state("app.81", {
        url: "/81",
        views: {
          menuContent: {
            templateUrl: "templates/81.html",
          },
        },
      })
      .state("app.82", {
        url: "/82",
        views: {
          menuContent: {
            templateUrl: "templates/82.html",
          },
        },
      })
      .state("app.83", {
        url: "/83",
        views: {
          menuContent: {
            templateUrl: "templates/83.html",
          },
        },
      })
      .state("app.84", {
        url: "/84",
        views: {
          menuContent: {
            templateUrl: "templates/84.html",
          },
        },
      })
      .state("app.85", {
        url: "/85",
        views: {
          menuContent: {
            templateUrl: "templates/85.html",
          },
        },
      })
      .state("app.86", {
        url: "/86",
        views: {
          menuContent: {
            templateUrl: "templates/86.html",
          },
        },
      })
      .state("app.87", {
        url: "/87",
        views: {
          menuContent: {
            templateUrl: "templates/87.html",
          },
        },
      })
      .state("app.88", {
        url: "/88",
        views: {
          menuContent: {
            templateUrl: "templates/88.html",
          },
        },
      })
      .state("app.89", {
        url: "/89",
        views: {
          menuContent: {
            templateUrl: "templates/89.html",
          },
        },
      })
      .state("app.90", {
        url: "/90",
        views: {
          menuContent: {
            templateUrl: "templates/90.html",
          },
        },
      })
      .state("app.91", {
        url: "/91",
        views: {
          menuContent: {
            templateUrl: "templates/91.html",
          },
        },
      })
      .state("app.92", {
        url: "/92",
        views: {
          menuContent: {
            templateUrl: "templates/92.html",
          },
        },
      })
      .state("app.93", {
        url: "/93",
        views: {
          menuContent: {
            templateUrl: "templates/93.html",
          },
        },
      })
      .state("app.94", {
        url: "/94",
        views: {
          menuContent: {
            templateUrl: "templates/94.html",
          },
        },
      })
      .state("app.95", {
        url: "/95",
        views: {
          menuContent: {
            templateUrl: "templates/95.html",
          },
        },
      })
      .state("app.96", {
        url: "/96",
        views: {
          menuContent: {
            templateUrl: "templates/96.html",
          },
        },
      })
      .state("app.97", {
        url: "/97",
        views: {
          menuContent: {
            templateUrl: "templates/97.html",
          },
        },
      })
      .state("app.98", {
        url: "/98",
        views: {
          menuContent: {
            templateUrl: "templates/98.html",
          },
        },
      })
      .state("app.99", {
        url: "/99",
        views: {
          menuContent: {
            templateUrl: "templates/99.html",
          },
        },
      })
      .state("app.100", {
        url: "/100",
        views: {
          menuContent: {
            templateUrl: "templates/100.html",
          },
        },
      })
      .state("app.101", {
        url: "/101",
        views: {
          menuContent: {
            templateUrl: "templates/101.html",
          },
        },
      })
      .state("app.102", {
        url: "/102",
        views: {
          menuContent: {
            templateUrl: "templates/102.html",
          },
        },
      })
      .state("app.103", {
        url: "/103",
        views: {
          menuContent: {
            templateUrl: "templates/103.html",
          },
        },
      })
      .state("app.104", {
        url: "/104",
        views: {
          menuContent: {
            templateUrl: "templates/104.html",
          },
        },
      })
      .state("app.105", {
        url: "/105",
        views: {
          menuContent: {
            templateUrl: "templates/105.html",
          },
        },
      })
      .state("app.106", {
        url: "/106",
        views: {
          menuContent: {
            templateUrl: "templates/106.html",
          },
        },
      })
      .state("app.107", {
        url: "/107",
        views: {
          menuContent: {
            templateUrl: "templates/107.html",
          },
        },
      })
      .state("app.108", {
        url: "/108",
        views: {
          menuContent: {
            templateUrl: "templates/108.html",
          },
        },
      })
      .state("app.109", {
        url: "/109",
        views: {
          menuContent: {
            templateUrl: "templates/109.html",
          },
        },
      })
      .state("app.110", {
        url: "/110",
        views: {
          menuContent: {
            templateUrl: "templates/110.html",
          },
        },
      })
      .state("app.111", {
        url: "/111",
        views: {
          menuContent: {
            templateUrl: "templates/111.html",
          },
        },
      })
      .state("app.112", {
        url: "/112",
        views: {
          menuContent: {
            templateUrl: "templates/112.html",
          },
        },
      })
      .state("app.113", {
        url: "/113",
        views: {
          menuContent: {
            templateUrl: "templates/113.html",
          },
        },
      })
      .state("app.114", {
        url: "/114",
        views: {
          menuContent: {
            templateUrl: "templates/114.html",
          },
        },
      });
    $urlRouterProvider.otherwise("/app/playlists");
  });