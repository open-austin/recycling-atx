// google api is global for now
const geocoder = new google.maps.Geocoder();

export default {
  geocode: function(address, callback) {
    const opts = { address };
    geocoder.geocode(opts, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        // parse and simplify response
        const result = results[0];
        const response = {
          coordinates: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          }
        };
        return callback(null, response);
      } else {
        return callback(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  }
};
