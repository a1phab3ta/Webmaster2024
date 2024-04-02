// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// Load GeoJSON data from file
fetch('countries (1).geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        var country = feature.properties.name;
        layer.bindPopup("Country: " + country + "<br> Main Energy Source: " + feature.properties.main_energy);
      },
      style: function(feature) {
        return {
          fillColor: "#ffffff",
          fillOpacity: 0.7,
          color: 'black',
          weight: 1,
        };
      }
    }).addTo(map);
  });
