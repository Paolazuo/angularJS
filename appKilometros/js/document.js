var app = angular.module('myApp', []);
app.controller('calcularCtrl', 
function($scope) {
  $scope.CalcularTotal = function() {
    if ($scope.distancia) {
      if ($scope.distancia <= 300) {
            $scope.precio = 250;
        }else if ($scope.distancia > 300 && $scope.distancia <= 1000) {
            $scope.precio = ( 30*($scope.distancia - 300) )+250;
        }else {
            $scope.precio=  ((($scope.distancia - 1000) * 20) + (700 * 30) + 250 );
        }
      if ($scope.precio > 500) {
            $scope.precio = $scope.precio- ($scope.precio * 0.1);
        }
    }
  }
});