"use strict"

const app= angular.module('ngApp', [])

app.controller('ExampleCtrl', ExCtrl)

function ExCtrl ($scope) {
  $scope.txtChange = function() {
    console.log('ng-change called')
  }
}

app.controller("Ctrl1", CtrlOne);
app.controller("Ctrl2", CtrlTwo);

function CtrlOne ($scope) {
  $scope.testVar = "testVar inside CtrlOne";
}

function CtrlTwo ($scope) {
  // $scope.testVar = "testVar inside CtrlTwo";
}
// Commenting out line 21 moves the nested controller into Sibling Controller bc Nesting: the Ctrl2 gtes controlled within its Parent scope

app.controller("Ctrl1as", CtrlOneAs);
app.controller("Ctrl2as", CtrlTwoAs);

function CtrlOneAs () {
  this.testVar = "testVar inside CtrlOneAs";
}

function CtrlTwoAs () {
  this.testVar = "testVar inside CtrlTwoAs";
}
