angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$locale,$http) {

$scope.language=navigator.language;
$scope.id=$locale.id;
  $http.get('http://freegeoip.net/json/').success(function(data) {
    $scope.allads = data;
  });



  $scope.info = function () {
        console.log(window.plugins.sim);
        window.plugins.sim.getSimInfo(successCallback, errorCallback);
  }

      function successCallback(result) {
        console.log(result);
        alert(JSON.stringify(result));
      }





    $scope.findDeviceIP = function() {
        networkinterface.getIPAddress(function (ip) { 
            alert(ip); 
        });     
    }


})

.controller('ChatsCtrl', function($scope,Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
  Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('Accounnavigator.languagetCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
