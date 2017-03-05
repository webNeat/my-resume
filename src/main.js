var app = angular.module('resume', []);

app.controller('ResumeController', ['$scope', '$http', function($scope, $http){
    var lang = window.location.href;
    lang = lang.substring(lang.lastIndexOf('/') + 1).split('.')[0];
    $http.get('data/' + lang + '.json').success(function(data){
        $scope.i = data;
    });

    $scope.getNumber = function(num) {
        return new Array(num);   
    }
}]);
