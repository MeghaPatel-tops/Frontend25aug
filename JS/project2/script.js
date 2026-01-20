console.log("script running");

function pageLoader(){
     console.log("loggggg");
    setTimeout(()=>{
        console.log("loggggg");
        
        document.getElementById('loader-div').style.display="none";
        document.getElementById('hero-div').style.display="block";
    },3000)
}

window.onload = pageLoader();
