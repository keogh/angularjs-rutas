angular.module('ContactsApp').controller('ShowCtrl', function ($scope, $routeParams, Contacts) {
  var contactId = $routeParams.id || 0;

  $scope.contact = Contacts.get(contactId);
})