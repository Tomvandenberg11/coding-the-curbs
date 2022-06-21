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

// https://bl.ocks.org/chriswhong/8977c0d4e869e9eaf06b4e9fda80f3ab used for marker code
class ClickableMarker extends mapboxgl.Marker {
  // new method onClick, sets _handleClick to a function you pass in
  onClick(handleClick) {
    this._handleClick = handleClick;
    return this;
  }

  // the existing _onMapClick was there to trigger a popup
  // but we are hijacking it to run a function we define
  _onMapClick(e) {
    const targetElement = e.originalEvent.target;
    const element = this._element;

    if (
      this._handleClick &&
      (targetElement === element || element.contains(targetElement))
    ) {
      this._handleClick();
    }
  }
}

// All palen
const palen = [
  {
    name: "Utrecht",
    coordinates: [5.123448523735618, 52.082773415719515],
  },
];

palen.forEach((paal) => {
  new ClickableMarker()
    .setLngLat(paal.coordinates)
    .onClick(() => {
      // onClick() is a thing now!
      console.log(paal.name);
    })
    .addTo(map);
});
