angular.module('ContactsApp').controller('ContactsCtrl', function ($scope, Contacts) {
  $scope.contacts = Contacts.getAll();
});
