# USGS Earthquake Visualization - Leaflet Challenge

## Project Background

The United States Geological Survey (USGS) is integral in providing scientific data on natural hazards, ecosystem health, and the impacts of environmental and climate changes. This project was developed to enhance the visualization of global earthquake data, creating an interactive web-based tool using Leaflet, a JavaScript library for interactive maps.

## Objective

The goal of this project is to develop a Leaflet-based visualization tool that showcases earthquake data from the USGS, particularly focusing on earthquakes that occurred over the last 7 days. 

## Implementation

The project involves creating a map that displays earthquakes based on their longitude and latitude. The data used for this visualization is sourced from the USGS and includes all earthquakes that occurred globally over the last 7 days.

### Key Features

- **Earthquake Visualization**: Each earthquake is represented as a marker on the map, with the markers' size and color indicating the earthquake's magnitude and depth.
  
- **Magnitude Representation**: Marker size is proportional to the earthquake's magnitude, making larger earthquakes more visually prominent.
  
- **Depth Representation**: The color of each marker signifies the earthquake's depth, with darker colors indicating greater depths.
  
- **Interactive Popups**: Markers include popups with detailed information about each earthquake, such as location, magnitude, and depth.

- **Real-Time Data**: The map uses real-time data from the USGS GeoJSON Feed, ensuring the visualization is current and accurate.

### Technologies Used

- **Leaflet.js**: For creating the interactive map and plotting earthquake data.
- **D3.js**: To fetch and process the GeoJSON data from USGS.
- **HTML/CSS**: For structuring and styling the webpage.

### Repository Structure

- `static` directory:
  - `css` subfolder: Contains the CSS files for styling the Leaflet map and the custom legend.
  - `js` subfolder: Houses `logic.js`, which includes the JavaScript code to retrieve data using D3 and to create the map and map layers.
- `index.html`: Located in the main repository folder and is the main entry point for the application. 

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project's main directory.
3. Open `index.html` in a web browser to view the earthquake visualization map.
