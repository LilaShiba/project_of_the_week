function marsFind(event){
  event.preventDefault()
  console.log('About to get Mars Rover pics')
  catchMars()

  async function catchMars(){
    const sol = document.getElementById('sol');
    const camera = document.getElementById('camera');
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol.value+"&camera="+camera.value+"&api_key=DEMO_KEY"
    console.log('url:'+url)
    const res = await fetch(url);
    const data = await res.json()
    console.log('Populating data')
    document.getElementById('myH1').textContent = data.photos[0].camera.full_name
    document.getElementById('myImg').src=data.photos[0].img_src
  }
}
// callback function
document.querySelector('#find-mars').addEventListener('click', marsFind);
