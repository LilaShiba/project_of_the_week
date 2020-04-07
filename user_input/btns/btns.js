const form = document.getElementById('myForm');
// const camera = document.getElementById('camera');
//
// const para = document.querySelector('p');

form.onsubmit = function(e) {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    console.log(formData.values())
  }



  // const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol.value+"&camera=fhaz&api_key=DEMO_KEY"

  // console.log('about to fetch Mars api')
  // fetch(url)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //     const data = res
  //     document.getElementById('mars_info').textContent = data.photos[0].camera.full_name
  //     document.getElementById('mars').src = data.photos[0].img_src
  // })
// }
