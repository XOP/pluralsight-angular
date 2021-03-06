/**
 * Created on 15.11.14.
 */

'use strict';

(function(){

    var app = angular.module('event', []);

    app.controller('eventCtrl',
        function eventCtrl($scope){

            $scope.votesStyle = {
                'font-size' : '.8em'
            };

            $scope.event = {
                name : 'New Year Eve 2015',
                date : '31.12.2014',
                time : '20:00',
                imageUrl : 'images/event-1.jpg',
                price : '80',
                sessions: [
                    {
                        "name": "Soprano",
                        "events": "fugiat Lorem consequat sunt consectetur",
                        "duration": "30 min",
                        "votes": 0,
                        special: false
                    },
                    {
                        "name": "Fangold",
                        "events": "quis enim cupidatat et do",
                        "duration": "60 min",
                        "votes": 0,
                        special: true
                    },
                    {
                        "name": "Suremax",
                        "events": "duis voluptate nisi culpa irure",
                        "duration": "30 min",
                        "votes": 0,
                        special: false
                    },
                    {
                        "name": "Ultrimax",
                        "events": "consectetur sunt sit id nostrud",
                        "duration": "30 min",
                        "votes": 0,
                        special: false
                    }
                ]
            };


            $scope.voteUp = function(session){
                session.votes++;
            };

            $scope.voteDown = function(session){
                session.votes--;
            };

        }
    );

})();
