'use strict';

routeApp.controller("Rte66Controller", function($scope, $window, RouteFactory){

    function fetchHwyData(){
        RouteFactory.getHighways()
        .then((highwayData)=>{
            let hwyData = highwayData.data;
            $scope.highwayName = hwyData[1].highwayName;
            $scope.highwayDescription= hwyData[1].highwayDescription;
        });

    }

    fetchHwyData();
});