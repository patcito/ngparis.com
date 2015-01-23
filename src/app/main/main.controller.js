'use strict';

angular.module('ngParis')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://angular.jobboardmaker.com/en/job_offers.json').success(function(jobs){
      $scope.jobs = jobs;
      console.log(jobs);
    });
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    //(function(){var a=document.createElement('script');
     //a.type='text/javascript';a.async=true;a.src='https://widget.pushbullet.com/embed.js';
     //var b=document.getElementsByTagName('script')[0];
     //b.parentNode.insertBefore(a,b);})();
  //var _yoData = {
    //"username": "NGPARIS",
    //"trigger": "Never miss a meetup, get a monthly YO!"
  //};
  //var s = document.createElement("script");
  //s.type = "text/javascript";
  //s.src = "//yoapp.s3.amazonaws.com/js/yo-button.js";
  //(document.head || document.getElementsByTagName("head")[0]).appendChild(s);
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
