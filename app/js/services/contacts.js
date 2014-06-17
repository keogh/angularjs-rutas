angular.module('ContactsApp').factory('Contacts', function () {
  var contacts = [
    {id: 1, name: 'Isaac', lastname: 'Zepeda', age: '30', phone: '1122334455',},
    {id: 2, name: 'Alberto', lastname: 'Picos', age: '30', phone: '1222434585',},
    {id: 3, name: 'Jose', lastname: 'Salcido', age: '30', phone: '1172834435',},
    {id: 4, name: 'Juan', lastname: 'López', age: '30', phone: '7765092811',},
    {id: 5, name: 'Alfonso', lastname: 'Harita', age: '30', phone: '1276804455',},
    {id: 6, name: 'Hector', lastname: 'Yeomans', age: '30', phone: '1985730783',}
  ];

  return {
    getAll: function () {
      return contacts;
    },
    get: function (id) {
      id = parseInt(id);
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) return contacts[i];
      }
      return null;
    }
  }
});