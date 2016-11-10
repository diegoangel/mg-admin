Ejemplo ajax con el servicio de AngularJS $http

$http.get('http://localhost:5000/staff/1').
    success(function(data, status, headers, config) {
        $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
        // log error
    });