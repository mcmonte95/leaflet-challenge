# USGS Earthquake Visualization - Leaflet Challenge

## Project Background

The United States Geological Survey (USGS) is a key entity in providing scientific data on natural hazards, ecosystem health, and the impacts of environmental and climate changes. To enhance the dissemination and understanding of this information, USGS sought to develop a tool for visualizing global earthquake data. This project addresses this need by creating an interactive web-based visualization tool using Leaflet, a JavaScript library for interactive maps.

## Objective

The primary objective of this project is to develop a Leaflet-based tool that visualizes earthquake data, allowing USGS to better educate the public and government organizations about seismic activities worldwide. The visualization aims to present the data in a manner that is both informative and accessible to a wide audience.

## Implementation

This project involves the creation of a map that plots earthquakes based on their longitude and latitude, sourced from USGS's earthquake data.

### Key Features

- **Visualization of Earthquakes**: Earthquakes are represented as markers on the map. The markers' size and color are determined by the earthquake's magnitude and depth, respectively.
  
- **Magnitude Representation**: The size of each marker correlates with the earthquake's magnitude, with larger markers indicating more significant seismic events.
  
- **Depth Representation**: The color of each marker reflects the earthquake's depth, with darker shades representing deeper seismic events.
  
- **Interactive Popups**: Clicking on a marker displays a popup with detailed information about the earthquake, including its location, magnitude, and depth.

- **Data Source**: The visualization uses real-time earthquake data from the USGS GeoJSON Feed, ensuring up-to-date and accurate information.

### Technologies Used

- **Leaflet.js**: Employed for mapping and plotting earthquake data.
- **D3.js**: Used for retrieving and processing the GeoJSON data from USGS.
- **HTML/CSS**: For building and styling the webpage.

### Repository Structure

[Explanation of the repository structure]

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser to view the earthquake visualization map.
