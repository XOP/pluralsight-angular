/**
 * Created on 15.11.14.
 */

'use strict';

(function(){

    var appName = 'Event Reg';

    var app = angular.module('eventReg', ['event', 'ngSanitize']);

    app.controller('appName', function(){
        this.name = appName;
    });

    app.controller('footerData', function($scope, $sce){

        $scope.copyright = ''+
            '<span title="' + appName + '">' +
                '<span style="text-transform: uppercase; color: salmon;">' +
                    'c' +
                '</span>' +
                'opyright' +
            '</span>';

        $scope.trustedAvailable = true;
        $scope.copyrightTrusted = $sce.trustAsHtml($scope.copyright);

    });

})();