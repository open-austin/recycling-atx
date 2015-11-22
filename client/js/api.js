import $ from 'jquery';
import { baseUrl } from './config';

const api = {
  getAllLocations: function(callback) {
    $.ajax(`${baseUrl}/locations`)
      .done((data) => { callback(null, data.locations); })
      .fail((response, status, err) => { callback(err); });
  },

  getLocation: function(address, callback) {
    $.ajax({
      url: `${baseUrl}/locations`,
      data: { address: address }
    })
      .done((data) => { callback(null, data); })
      .fail((response, status, err) => { callback(err); });
  },

  createLocation: function(location, callback) {

  },

  addReport: function(id, callback) {

  }
};

export default api;
