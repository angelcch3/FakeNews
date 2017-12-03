mapboxgl.accessToken = 'pk.eyJ1Ijoiam95YiIsImEiOiJjamFwanp0YW4waGZtMnhwaHBoZjJ4N2F2In0.x7rf-Ip6vbZbVSqJmC9nEQ';

var map = new mapboxgl.Map({
                           container: 'map',
                           style: 'mapbox://styles/mapbox/light-v9',
                           center: [-71.5, 41.5],
                           zoom: 5
                           });

map.on('load', function () {
       // Add a layer showing the places.
       map.addLayer({
                    "id": "places",
                    "type": "symbol",
                    "source": {
                    "type": "geojson",
                    "data": {
                    "type": "FeatureCollection",
                    "features": [{
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56253/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-71.42436, 41.828217]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56250/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-73.5387, 41.0534]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56252/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-72.651943, 41.549698]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56254/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-72.713163, 41.820525]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56257/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-73.050432, 41.223156]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56258/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-73.472395, 41.395395]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56255/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-71.060883, 42.360186]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56256/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-71.105323, 42.375080]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56259/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-79.968795, 40.458804]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56260/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-73.992609, 40.725159]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56261/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-122.507219, 47.142355]
                                 }
                                 }, {
                                 "type": "Feature",
                                 "properties": {
                                 "description": '<iframe src="https://feed.mikle.com/widget/v2/56262/" height="202px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>',
                                 "icon": "park"
                                 },
                                 "geometry": {
                                 "type": "Point",
                                 "coordinates": [-68.824784, 44.863547]
                                 }
                                 }]
                    }
                    },
                    "layout": {
                    "icon-image": "{icon}-15",
                    "icon-allow-overlap": true
                    }
                    
                    });
       
       // When a click event occurs on a feature in the places layer, open a popup at the
       // location of the feature, with description HTML from its properties.
       map.on('click', 'places', function (e) {
              map.flyTo({center: e.features[0].geometry.coordinates})
              new mapboxgl.Popup()
              .setLngLat(e.features[0].geometry.coordinates)
              .setHTML(e.features[0].properties.description)
              .addTo(map);
              });
       
       // Change the cursor to a pointer when the mouse is over the places layer.
       map.on('mouseenter', 'places', function () {
              map.getCanvas().style.cursor = 'pointer';
              });
       
       // Change it back to a pointer when it leaves.
       map.on('mouseleave', 'places', function () {
              map.getCanvas().style.cursor = '';
              });
       });
