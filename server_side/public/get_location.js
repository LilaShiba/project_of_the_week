function geoFind(){
  if ("geolocation" in navigator){
    document.getElementById('myH1').textContent = "Geolocation enabled"
    //callback function
    navigator.geolocation.getCurrentPosition(success, error)
  } else{
    document.getElementById('myH1').textContent = "Geolocation is NOT enabled"
  }

  function success(position) {
   const latitude  = position.coords.latitude;
   const longitude = position.coords.longitude;
   document.getElementById('myLat').textContent = "Latitude: " + latitude
   document.getElementById('myLng').textContent = "Longitude: "+ longitude
  }

  function error() {
  document.getElementById('myH1').textContent = 'Unable to retrieve your location';
  }
}
// callback function
document.querySelector('#find-me').addEventListener('click', geoFind);
