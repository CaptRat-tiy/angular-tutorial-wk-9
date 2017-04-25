"use strict"

const app= angular.module('ngApp', [])

app.controller('ExampleCtrl', ExCtrl)

function ExCtrl ($scope) {
  $scope.txtChange = function() {
    console.log('ng-change called')
  }
}
