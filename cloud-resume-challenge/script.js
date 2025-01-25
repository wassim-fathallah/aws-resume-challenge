function toggleRotation(image) {
    image.classList.toggle('paused'); // Adds or removes the 'paused' class
  }
  const counter=document.querySelector(".counter-number");
  async function updateCounter(){
    let response = await fetch ("https://kpgajqgyjr7y6mtojfgskdkr3i0hetaw.lambda-url.eu-west-3.on.aws/");
    let data=await response.json();
    counter.innerHTML=`Views:${data}`;
  }
  updateCounter();