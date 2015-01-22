/** * Created by Jesus Ramirez on 21/01/2015.*/
(function(){
    var app = angular.module('anticipo.controllers',[]);

        app.controller('AnticipoController', ['$scope', 'anticipoService', function ($scope, anticipoService) {
            anticipoService.all().then(function (data) {
                $scope.anticipos = data;
            });

        }])

})();
