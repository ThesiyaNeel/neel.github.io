require(["esri/config", "esri/Map", 
"esri/views/MapView", "esri/widgets/Sketch", "esri/widgets/Home"], function(esriConfig, Map,
MapView, Sketch, Home) {
  esriConfig.apiKey = "AAPK60944087629f4ab296da07ac312de5c32ybzQaBVyRvczGsn5Ie1BuiVsGH57DsY70SqXTMpi2KwT9I1qSdQeT-PURgpLqX2"; 

const map = new Map({ basemap: "arcgis/topographic" // basemap styles service 
});
const view = new MapView({ 
map: map, 
center: [-118.805, 34.027], // Longitude, latitude 
zoom: 13, // Zoom level 
container: "viewDiv" // Div element 
});
  const sketch = new Sketch({
        view: view
    });
    view.ui.add(sketch, "top-right");
  const home = new Home({
        view: view
    });
    view.ui.add(home, "top-left");
});