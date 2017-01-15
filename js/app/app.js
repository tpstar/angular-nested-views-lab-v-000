angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'//,
                // controller: 'UserController as user',
                // resolve: {
                //   userData: function ($stateParams, UserService) {
                //       console.log($stateParams.id);
                //       return UserService.getUser($stateParams.id);
                //   }
                // }
            })
            .state('home.notifications', {
                url: 'notifications',
                templateUrl: 'views/home/notifications.html'
            })
            .state('home.timeline', {
              url: 'timeline',
              templateUrl: 'views/home/timeline.html'
            })
            .state('home.user', {
              url: 'user',
              templateUrl: 'views/home/user.html'
            })
      });
