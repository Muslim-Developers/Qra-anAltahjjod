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
      .state("app.11", {
        url: "/11",
        views: {
          menuContent: {
            templateUrl: "templates/11.html",
            controller: "The11Ctrl",
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
      });
    $urlRouterProvider.otherwise("/app/playlists");
  });
