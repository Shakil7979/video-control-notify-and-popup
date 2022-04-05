var elem = document.getElementById("myvideo"); //video tag
var ClickWapper = document.getElementById("playVIDEO"); //video tag Wrapper 

var iconImgBgWapper = document.getElementById('img-js-id'); // overly image Wrapper 
ClickWapper.addEventListener('click', forClickWapper); // video tag click event
function forClickWapper(){ //play, pause function 
    // openFullscreen();
    ClickWapper.classList.toggle('allow-full-screen');
    iconImgBgWapper.classList.toggle('icon-img-bg-pc');
    iconImgBgWapper.classList.toggle('pulsing');
    elem.classList.toggle('video-active');
    var clickWapperNewClass = document.querySelectorAll('.allow-full-screen');
    if(clickWapperNewClass.length < 1){
        elem.pause();
    }
    else{
        elem.play();
    }
    
}


function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    else{
        elem.push();
    }
}