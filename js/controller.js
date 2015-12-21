var ecommerceApp = angular.module('ecommerce', []);

ecommerceApp.controller('ecommerce-controller', function ($scope, $http){
	$scope.ninja = "DigitalCrafts students";

	$scope.weatherJSON = [];
	$http.get('http://localhost:3000').then(function (theData){
		$scope.weatherJSON = theData.data;
		// console.log(theData.data)
	})


	//This will fire on ng-submit. We want to make a post request to the server
	//and send it username and password. They will be available in body.req
	//on the server
	$scope.login = function(){
	 // send a post request to the server
	  $http.post('http://localhost:3000/register', {username: $scope.username, password: $scope.password})
	    // handle success
	    .success(function (data, status) {
			if(data.status = "Registration Successful"){
				//do angualar stuff
				console.log("success");
				$scope.loggedin = true;
			} else {
	        	user = false;
	      }
	    })
	    // handle error
	    .error(function (data) {
	      user = false;
	    });

	}

});