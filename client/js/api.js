import $ from 'jquery';
default export const api = {

  // callback(err, locations)
  getAllLocations: function(callback) {
      $.ajax(method: 'get', url: 'http://localhost:1234/locations')
      .done(function(locations) {
          return callback(null, locations);
      });
      .fail(function(response, status, err) {
          return callback(err);
      });
  },

  // callback(err, locations)
  getLocation: function(id, callback) {

  },

  // callback(err, location)
  createLocation: function(location, callback) {

  },

  // callback(err, locations)
  addReport: function(id, callback) {

  }
};
