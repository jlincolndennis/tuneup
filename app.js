
var app = angular.module('redditClone', ['ngAnimate','ngMessages'])

app.directive('timeless', function() {
  var Timeless;
  Timeless = {
    times: {
      year: 31557600000, month: 2629800000, week: 604800000,
      day: 86400000, hour: 3600000, minute: 60000, second: 1000
    },
    labels: {
      past: ['ago'],
      future: ['in'],
      year: ['year', 'years'],
      month: ['month', 'months'],
      week: ['week', 'weeks'],
      day: ['day', 'days'],
      hour: ['hour', 'hours'],
      minute: ['minute', 'minutes'],
      second: ['second', 'seconds'],
      prefix: '',
      suffix: '',
      updateInterval: 1000,
      timeType: {
        auto: 0,
        month: 1,
        week: 2,
        day: 3,
        hour: 4,
        minute: 5,
        second: 6
      }
    },
    epoch: function () {
      return Date.now();
    },
    difference: function (time) {
      return this.epoch() - time;
    },
    estimate: function (date) {
      var diff = this.difference(date)
        , ago
        , future
        , time
        , result = [];

      for (time in this.times) {
        if (diff >= this.times[time]) {
          ago = Math.floor(diff / this.times[time]);
          if (ago > 1) {
            time = Timeless.labels[time][1];
          }
          result.push(
            Timeless.labels.prefix
            + ' '
            + ago
            + ' '
            + time
            + ' '
            + Timeless.labels.past
            + ' '
            + Timeless.labels.suffix
          );
        }
        else if (diff < 0 && diff <= this.times[time]) {
          future = Math.abs(Math.floor(diff / this.times[time]));
          if (future > 1) {
            time = Timeless.labels[time][1];
            result.push(
              Timeless.labels.prefix
              + ' '
              + Timeless.labels.future
              + ' '
              + future
              + ' '
              + time
              + ' '
              + Timeless.labels.suffix
            );
          }
        }
      }
      return result;
    },
    isValid: function(timeItem) {
      return Object.keys(timeItem);
    }

  };

  return {
    transclude: true,
    restrict: 'E',
    replace: true,
    template: '<span ng-transclude></span>',
    scope: {
        time: '=',
        options: '=',
        type: '='
    },
    link: function(scope, element, attrs) {
      angular.extend(Timeless.labels, scope.options);
      var estimateTime = Timeless.estimate(scope.time)
        , setTimeType;

      if (typeof estimateTime[Timeless.labels.timeType[scope.type]] == 'undefined') {
        setTimeType = Timeless.labels.timeType.auto;
      }
      else {
        setTimeType = Timeless.labels.timeType[scope.type];
      }
      setTimeout(function() {
          return element.text(estimateTime[setTimeType]);
      }, 1);
      setInterval(function () {
        scope.$apply(function () {
          var estimateTime = Timeless.estimate(scope.time);
          return element.text(estimateTime[setTimeType]);
        });
      }, Timeless.labels.updateInterval);
    }
  };
})

app.controller('MainController', function($scope){
  $scope.vm = {}
  $scope.changeSorting = function (sortCriteria) {
    $scope.vm.sort = sortCriteria
  }

  $scope.upVote = function (post) {
    post.votes++;
  }

  $scope.downVote = function (post) {
    post.votes--;
  }
  $scope.formSubmit = function (){
  console.log(myForm.$valid);
  $scope.form.votes = 0;
  $scope.form.comments = [];
  $scope.form.date = new Date();

  $scope.data.push($scope.form);
  $scope.form = {}
}

$scope.formClose = function () {
  $scope.form = {};
  $scope.myForm.$setUntouched();
}

  $scope.data = [
    { title:  "What It's Like Teaching g20",
      image: 'http://i.imgur.com/YXz7X7w.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "SpicyChocoLatte",
      date: new Date(),
      votes: 23,
      comments: []
    },
   {
     title:  '"How did you make it search as you typed?"',
     image: 'http://i.imgur.com/WS3aUSl.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "BodaciousBud",
     date: new Date("April 3, 2016"),
     votes: 23,
     comments: []
   },
   {
     title:  'Good Guy Akyuna',
     image: 'http://i.imgur.com/6FKyxPi.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "courtm187",
     date: new Date("March 25, 2016"),
     votes: 10,
     comments: []
   },
   {
     title:  "When the Page Doesn't Load",
     image: 'http://i.imgur.com/8A4fvHL.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "Mike-Ferg-a-nator",
     date: new Date("March 25, 2016"),
     votes: 10,
     comments: []
   },
   {
     title:  'MRW Someone Asks a Dumb Question',
     image: 'http://i.imgur.com/dhmZJ8E.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "SpicyChocoLatte",
     date: new Date("March 25, 2016"),
     votes: 10,
     comments: []
   },
   {
     title:  'A Valid Question',
     image: 'http://i.imgur.com/PZthqMa.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "lastlincoln",
     date: new Date("March 25, 2016"),
     votes: 10,
     comments: []
   },
   {
     title:  'MRW they tease me about my accent',
     image: 'http://i.imgur.com/8x2stCz.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "SpicyChocoLatte",
     date: new Date("January 2, 2016"),
     votes: 50,
     comments: []
   },
   {
     title:  'Styling with Bootstrap like....',
     image: 'http://i.imgur.com/ycARl6n.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "Mike-Ferg-a-nator",
     date: new Date("March 9, 2016"),
     votes: 4,
     comments: []
   },
   {
     title:  'After coding for 4 hours straight...',
     image: 'http://i.imgur.com/cIoDQQA.png',
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
     author: "lastlincoln",
     date: new Date("February 26, 2016"),
     votes: 1,
     comments: []
   }
 ];
})
