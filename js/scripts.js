function initMap() {
  let uluru = {
    lat: -25.363,
    lng: 131.044
  };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });

  function addMarker(pnt) {
    let lat = pnt.lat();
    lat = parseFloat(lat.toFixed(4), 10);

    let lng = pnt.lng();
    lng = parseFloat(lng.toFixed(4), 10);

    console.log(lat);
    console.log(lng);
    let marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    });
  }

  google.maps.event.addListener(map, 'click', function (event) {
    addMarker(event.latLng);
  });
}
