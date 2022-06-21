const testbuttonselector = document.getElementById("testbutton");
let colormarker = document.getElementsByClassName("mapboxgl-marker");

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1IjoidG9tdmRiMTEiLCJhIjoiY2w0NWliMHBpMDEwODNjcGJ3aDc3OGYzeSJ9.x8AbcVT7uoUfCbjuVZq--w";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [5.123448523735618, 52.082773415719515],
  zoom: 12.5,
  pitch: 36,
  hash: true,
});

//https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [5.123448523735618, 52.082773415719515],
      },
      properties: {
        title: "Smartzone Utrecht",
        description: "",
        reservatie: "Om 13:00-13:30 gereserveerd"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [5.22237, 52.0827],
      },
      properties: {
        title: "Smartzone Zeist",
        description: "",
        reservatie: "Om 14:00-14:15 gereserveerd"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [5.22237, 52.1827],
      },
      properties: {
        title: "Smartzone Lage Vuursche",
        description: "",
        reservatie: "Om 12:00-12:15 gereserveerd"
      },
    },
  ],
};

// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><p>${feature.properties.reservatie}</p>`
        )
    )
    .addTo(map);
}