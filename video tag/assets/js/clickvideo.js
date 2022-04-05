var elem = document.getElementById("myvideo");
var ClickWapper = document.getElementById("playVIDEO");

var iconImgBgWapper = document.getElementById('img-js-id');
ClickWapper.addEventListener('click', forClickWapper);
function forClickWapper(){
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