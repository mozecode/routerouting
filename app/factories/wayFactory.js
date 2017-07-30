'use strict';

//fbcreds unnecessary because we're not authenticating users- just using RESTful API

routeApp.factory("RouteFactory", function($q, $http, FirebaseUrl){

//get information from firebase
    let getHighways =()=>{
        return $q((resolve, reject)=>{
            $http.get(`${FirebaseUrl}highways.json`)
            .then((highwaysData)=>{
                resolve(highwaysData);
            })
            .catch((err)=>{
                console.log ("error", err);
                reject(err);
            });
        });
    };
    return {getHighways};
});// information comes back as an array of objects