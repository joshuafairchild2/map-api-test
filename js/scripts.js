let map;

function initMap() {
  let uluru = {
    lat: -25.363,
    lng: 131.044
  };

  map = new google.maps.Map(document.getElementById('map'), {
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

function findAddress() {
  let geocoder = new google.maps.Geocoder();
  let address = document.getElementById('address').value;
  console.log(address);
  geocoder.geocode({'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}



$(function() {
  $('form#lookup').submit(function(event) {
    findAddress();

    $(this).trigger('reset');
    event.preventDefault();
  });
})
