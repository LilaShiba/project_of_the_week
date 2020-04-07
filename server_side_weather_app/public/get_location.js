function geoFind(){
  if ("geolocation" in navigator){
    document.getElementById('myH1').textContent = "Geolocation enabled"
    //callback function
    navigator.geolocation.getCurrentPosition(success, error)
  } else{
    document.getElementById('myH1').textContent = "Geolocation is NOT enabled"
  }

  async function success(position) {
   const latitude  = position.coords.latitude;
   const longitude = position.coords.longitude;
   document.getElementById('myLat').textContent = "Latitude: " + latitude
   document.getElementById('myLng').textContent = "Longitude: "+ longitude
   // getting and sending user data to server
   // send data as a post
   // https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=11
   const data = {latitude, longitude}
   const options ={
     method: "POST",
     body: JSON.stringify(data),
     headers: {
       "Content-Type": "application/json"
     }
   };

   const res = await fetch('/api', options)
   const user_data = await res.json();
   console.log(user_data)
  }

  function error() {
  document.getElementById('myH1').textContent = 'Unable to retrieve your location';
  }
}
// callback function
document.querySelector('#find-me').addEventListener('click', geoFind);
