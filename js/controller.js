/** * Created by Jesus Ramirez on 21/01/2015.*/
(function(){
    angular.module('anticipo.controllers',[])

        .controller('AnticipoController', ['$scope', 'anticipoService', function ($scope, anticipoService) {
            anticipoService.all().then(function (data) {
                $scope.anticipos = data;
            });

        }])

})();
