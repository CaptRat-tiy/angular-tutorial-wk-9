const app= angular.module('ourApp', [])

app.controller('firstCtrl', First)

function First ($scope) {
  console.log('main controller to groundcontrol');

  let now = new Data()
  $scope.now = now.toTimeString();
  console.log('$scope.now is: ', $scope.now);
}
