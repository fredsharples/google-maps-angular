/**
 * Created by fred on 1/25/14.
 */
var myMap = angular.module('myMap',[]);

myApp.factory('Data',function (){
    return {message:"I'm data from a service"};
})

//Use JQuery to get the external data file
var vehicleObj = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'vehicleLocations.json', //local file
        //'url': 'http://dlpx01.aws.revivermx.com:8080/w1/rest/map/getlocations?pl=6YIT558&fr=2014-01-18+04%3A17&to=2014-01-31+21%3A00',
        //'url': 'http://dlpx01.aws.revivermx.com:8080/w1/rest/map/getlocations?pl=-1&fr=2014-01-18+04%3A17&to=2014-01-31+21%3A00',
        //'url': 'http://dlpx01.aws.revivermx.com:8080/w1/rest/map/getlocations?pl=5NQE755&fr=2014-01-1+04%3A17&to=2014-01-31+21%3A00',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

function FirstCtrl($scope, Data){
    $scope.data = Data;
}
function SecondCtrl($scope, Data){
    $scope.data = Data;
}