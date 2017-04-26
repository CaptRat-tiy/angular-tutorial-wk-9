"use strict"

var ourModuleModule = angular.module('morModulesApp', [])

ourModuleModule.controller('MoreModulesModule', MoreModules)

function MoreModules () {
  this.helloWorld = "Hello, World!"
}
