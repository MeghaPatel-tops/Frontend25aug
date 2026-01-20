function pageLoader(){
     console.log("loggggg");
    setTimeout(()=>{
        console.log("loggggg");
        
        document.getElementById('loader-div').style.display="none";
        document.getElementById('hero').style.display="block";
    },3000)
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('about-div-data');
  const content = document.getElementById('about-div-data');

  main.addEventListener('scroll', () => {
    const scrollTop = main.scrollTop;

    // Control speed (0.3 = smooth)
    content.style.transform = `translateY(-${scrollTop * 0.3}px)`;
  });
});

window.onload = pageLoader();