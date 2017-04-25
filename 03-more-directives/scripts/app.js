angular.module('moreDirectivesApp', [])
.controller('IfShowHideCtrl', IfShowHideCtrl)
.controller('RepeatCtrl', RepeatCtrl)

function IfShowHideCtrl() {}

function RepeatCtrl() {
  this.ourList = [
    {name: 'Patrick'},
    {name: 'Carrie'},
    {name: 'Tyler'},
    {name: 'Josh'},
    {name: 'Curt'},
    {name: 'Rob'},
    {name: 'Dex'},
  ]
}
