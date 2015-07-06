/**
 * Created by Sahan Rox on 7/6/15.
 */

angular.module("locationsExpireApp", ['uiGmapgoogle-maps'])
    .controller("TodoCtrl", function ($scope, $filter, $timeout) {

        //Real time clock
        $scope.clock = "loading..."; // initialise the time variable
        $scope.tickInterval = 5000; //ms

        var tick = function () {
            $scope.clock = Date.now() // get the current time
            $timeout(tick, $scope.tickInterval); // reset the timer
        };

        // Start timer
        $timeout(tick, $scope.tickInterval);

        $scope.$watch('clock', function (newVal) {
            $scope.clock = newVal;
            var nowTime = moment();

            for (var i = 0; i < $scope.markers.length; i++) {
                var arrayDate = moment($scope.markers[i].expire_date);

                if (nowTime > arrayDate) {
                    console.log("passed date");
                    $scope.markers[i].showStatus = "false";
                } else {
                    console.log("future date");
                    //$scope.markers[i].showStatus = "true";
                }
            }
            console.log($scope.markers);
        });


        $scope.markers = [

            {
                id: 101,
                latitude: 42.3349940452867,
                longitude: -71.0363168884369,
                expire_date: "07/06/2016 02:45 PM",
                showStatus: true
            },
            {
                id: 102,
                latitude: 42.3563941755867,
                longitude: -71.0466168884469,
                expire_date: "07/06/2016 2:46 PM",
                showStatus: true
            }, {
                id: 103,
                latitude: 42.3753940755867,
                longitude: -71.0853168884369,
                expire_date: "07/06/2015 08:00 AM",
                showStatus: true
            }, {
                id: 104,
                latitude: 42.3684940856867,
                longitude: -71.1273168884369,
                expire_date: "07/06/2015 11:00 AM",
                showStatus: true
            }

        ]


        $scope.map = {
            center: {
                latitude: 42.3349940452867,
                longitude: -71.0353168884369
            },
            zoom: 11

        };


        $scope.options = {
            scrollwheel: false
        };


    })
;