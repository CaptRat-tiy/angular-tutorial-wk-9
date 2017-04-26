var app = angular.module('app', [])

app.controller("SuperDuckCtrl", SuperDuckCtrl)
function SuperDuckCtrl () {
  this.duckname
}

app.directive("superDuck", function(){
  return {
    restrict: 'EAC',
    scope: {
      'duckname': '@'
    },
    link: function(scope, element, attrs) {
      scope.duckname = attrs.duckname || "Default Duck"
    },
    template: "<div><p>Please tell me your coding woes so we can paddle to the finish line together!</p><p>Your truly, {{duckname}}</p></div>"
  }
})
