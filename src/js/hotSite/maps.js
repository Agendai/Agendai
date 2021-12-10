let map;

function initMap() {
  let mapOptions = {
    center: {lat: -23.555069457316176, lng: -46.638692849728336},
    zoom: 8,
    mapTypeId: 'roadmap'
  }
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
