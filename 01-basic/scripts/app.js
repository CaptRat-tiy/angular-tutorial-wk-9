"use strict"

const app= angular.module('ourApp', [])

app.controller('FirstCtrl', First)

function First ($scope) {
  console.log('main controller to groundcontrol');

  let now = new Date()
  $scope.now = now.toTimeString();
  console.log('$scope.now is: ', $scope.now);
}
