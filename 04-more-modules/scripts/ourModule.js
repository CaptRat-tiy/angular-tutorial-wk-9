"use strict"

var ourModuleModule = angular.module('moreModulesApp', [])

ourModuleModule.controller('MoreModulesModule', MoreModules)

function MoreModules () {
  this.helloWorld = "Hello, World!"
}
