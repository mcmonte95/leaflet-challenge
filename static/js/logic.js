// URL of API where data is located
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(url).then(function (data) {
    console.log(data.features[0]);
  });

/**************************************
 * SECTION: Create Base Map
 **************************************/

// create base map object
let myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 5
});

// Adding a tile layer to our map using Open Street Map:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

/**************************************
 * SECTION: Format points for GeoJson
 **************************************/

// Define helper function to find marker color
function getMarkerColor(value) {
    return value > 90 ? 'red' :
           value > 70 ? 'orangered' :
           value > 50 ? 'orange' :
           value > 30 ? 'gold' : // 'gold' as a substitute for 'orangeyellow'
           value > 10 ? 'yellow' :
           value > -10 ? 'yellowgreen' :
                         'green'; // Any value -10 or lower gets green
}


// Define helper function for marker style
function circleMarkerStyle(feature){
    
    let color = getMarkerColor(feature.geometry.coordinates[2])
    let radius = feature.properties.mag * 5 // radius based on magnitude of earthquake (scale up radius for better visibility)

    let markerStyle = {
        radius: 8,
        fillColor: color,
        color: 'black',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
        radius: radius 
    };

    return markerStyle

};

// Define function to return formatted map layer
function formatPoints(geoJSONdata){
   
  
    return L.geoJSON(geoJSONdata, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, circleMarkerStyle(feature));
        }
    });


};



/**************************************
 * SECTION: Create Legend
 **************************************/

function createLegend(map) {
    // Create a new Leaflet control for the legend, positioned at the bottom right
    let legend = L.control({ position: 'bottomright' });

    // Function called when the legend is added to the map
    legend.onAdd = function () {
        // Create a div element for the legend
        let div = L.DomUtil.create('div', 'legend'),
            // Define the breakpoints for the legend
            grades = [-10, 10, 30, 50, 70, 90],
            // Map each grade to a legend item
            labels = grades.map((grade, index) => {
                // Determine the color for the current grade
                let color = getMarkerColor(grade);
                // Create a label string. For the last item, display as '90+', else show the range
                let label = index < grades.length - 1 ? `${grade} &ndash; ${grades[index + 1]}` : `${grade}+`;
                // Return the HTML string for the legend item
                return `<div class="legend-item">
                            <i class="color-box" style="background:${color};"></i>
                            <span>${label}</span>
                        </div>`;
            });

        // Join all legend items and set as inner HTML of the div
        div.innerHTML = labels.join('');
        // Return the div containing the legend
        return div;
    };

    // Return the legend control
    return legend;
}




/**************************************
 * SECTION: Add GeoJSON layer
 **************************************/

// Load GeoJSON data and add it to the map
d3.json(url).then(function(data) {
    formatPoints(data).addTo(myMap);
    createLegend(myMap).addTo(myMap); 
 });
 