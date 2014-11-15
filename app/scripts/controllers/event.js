/**
 * Created on 15.11.14.
 */

'use strict';

(function(){

    var app = angular.module('event', []);

    app.controller('eventCtrl',
        function eventCtrl($scope){

            $scope.event = {
                name : 'New Year Eve 2015',
                date : '31.12.2014',
                time : '20:00',
                imageUrl : 'images/event-1.jpg'
            };

        }
    );

})();
