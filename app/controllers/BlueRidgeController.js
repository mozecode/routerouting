'use strict';

routeApp.controller("BlueRidgeController", function($scope, $window, RouteFactory){

    function fetchHwyData(){
        RouteFactory.getHighways()
        .then((highwayData)=>{
            let hwyData = highwayData.data;
            console.log ("hwyData", hwyData);
             $scope.highwayName = hwyData[0].highwayName;
            $scope.highwayDescription= hwyData[0].highwayDescription;
        });

    }

    fetchHwyData();
});