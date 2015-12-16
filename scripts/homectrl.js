/**
 * Created by brandonhebbert on 12/15/15.
 */

angular.module('devMtIn').controller('homeCtrl', function($scope) {

    $scope.myProfile = {
        name: "",
        friends:[
            {name: 'Ryan'},
            {name: 'Bryan'},
            {name: 'Sarah'},
            {name: 'Zac'},
            {name: 'Erin'}
        ]

    };

});
