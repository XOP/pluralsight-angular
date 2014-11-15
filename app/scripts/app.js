/**
 * Created on 15.11.14.
 */

'use strict';

(function(){

    var appName = 'Event Reg';

    var app = angular.module('eventReg', ['event']);

    app.controller('appName', function(){
        this.name = appName;
    });

})();