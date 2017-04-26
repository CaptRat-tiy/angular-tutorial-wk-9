"use strict"

var app = angular.module('ourApp', ['moreModulesApp', 'ngTagsInput'])

app.controller('TagsCtrl', TagsCtrl)

function TagsCtrl () {
  this.tags = [
    { text: "Daffy" },
    { text: "Huey" },
    { text: "Donald" },
    { text: "Louis" },
  ]
}
