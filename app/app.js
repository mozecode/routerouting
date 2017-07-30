'use strict';

let routeApp = angular.module("RouteApp", ["ngRoute"])
.constant("FirebaseUrl", "https://highway-routing-873c3.firebaseio.com/"); //remember to add slash here when you establish url

routeApp.config(($routeProvider)=>{
    $routeProvider

    .when('/hwy/blueridge', {
        templateUrl:'partials/highway.html',
        controller:'BlueRidgeController'
    })
    .when('/hwy/rte66', {
        templateUrl:'partials/highway.html',
        controller:'Rte66Controller'
    })
    .otherwise('/');
});