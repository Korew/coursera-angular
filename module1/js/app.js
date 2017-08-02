(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.items = 0;

  $scope.checkLunch = function () {
    $scope.items = $scope.countItems($scope.lunch);

    if ($scope.items < 4) {
      $scope.message = $scope.items + " — Enjoy!";
    } else {
      $scope.message = $scope.items + " — Too much!";
    }
  };

  $scope.countItems = function (string) {
    var lunchArr = string.replace(/\s/g,'').split(','); //first removes all spaces
    var i = 0;
    var x = '';

// Removes all empty elements
    for(i;i<lunchArr.length;i++) {
      if(lunchArr[i] == '') {
        lunchArr.splice(i, 1);
      }
    }
// END Removes all empty elements

    return lunchArr.length;
  }
}

})();
