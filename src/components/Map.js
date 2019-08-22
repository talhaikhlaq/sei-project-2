// import React from 'react'
// // import mapboxgl from 'mapbox-gl'
//
// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
//
// class Map extends React.Component {
//   componentDidMount() {
//     this.map = new mapboxgl.Map({
//       container: this.mapDiv,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: {lat: 51.5153, lng: -0.00735 },
//       zoom: 2
//     })
//     this.props.countries.forEach((country) => this.addMarker(country))
//   }
//
//   addMarker(country) {
//     const [lat, lng] = country.latlng
//     const flag = document.createElement('div')
//     flag.innerHTML = `<img class="flag" src="${country.flag}" />`
//
//     const popup = new mapboxgl.Popup()
//       .setHTML(`<p>${country.name}</p>`)
//
//     new mapboxgl.Marker(flag)
//       .setLngLat({ lat, lng })
//       .setPopup(popup)
//       .addTo(this.map)
//   }
//
//   render() {
//     return {
//       <div className="map" ref={ el => this.mapDiv = el}></div>
//     }
//   }
// }
//
// export default Map
