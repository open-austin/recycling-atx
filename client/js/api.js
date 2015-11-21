import $ from 'jquery';
import { baseUrl } from './config';

const api = {
  getAllLocations: function(callback) {
    $.ajax(`${baseUrl}/locations`)
      .done((data) => { callback(null, data.locations); })
      .fail((response, status, err) => { callback(err); });
  },

  getLocation: function(id, callback) {

  },

  createLocation: function(location, callback) {

  },

  addReport: function(id, callback) {

  }
};

export default api;
