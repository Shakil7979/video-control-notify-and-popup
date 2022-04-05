
var popupWappper = document.getElementById('al-alert-popup'); //popup main wapper
var popupWappperStyle = popupWappper.style.display; // popup get display css
var clsbtn = document.getElementById('popup-close'); // popup close button
var abody = document.querySelector('body'); // where popup will show 
var secondShowWapper = document.getElementById('secondCount'); // popup second show wapper 
var muniteShowWapper = document.getElementById('munuteCount'); // pupup munite show wapper
var myTimer; //set time interval const
var countMunite = 2; // define count time in munite
var countSecond = 0; // define count time in Second
var count = countMunite*60+countSecond;
var progressFirst = countMunite*60+countSecond;
var intervalCount = 0; 

abody.addEventListener('mouseleave',showAlartPopup); // show popup event
clsbtn.addEventListener('click',hideAlartPopup); // click close button event


function showAlartPopup(){ //show alert popup functon 
    if(popupWappperStyle == 'flex'){
        console.log(popupWappperStyle); 
    }
    else{
        popupWappper.style.display = 'flex';
        clock();
    }
}

function hideAlartPopup(){ //close alert popup function
    popupWappper.style.display = 'none';
    clearInterval(myTimer);
    intervalCount = 0;
}



function clock() { //set time function 
    intervalCount = intervalCount+1;
    if(intervalCount == 1){
        myTimer = setInterval(myClock, 1000);
    }

    function myClock() { //main time function to add seTInterval
        if (count == 0) {
            clearInterval(myTimer);
        }
        else{
            var sec = count%60;
            var mun = Math.round(count / 60);
            if(digitCount(sec) == 1){
                sec = '0'+sec;
            }
            if(digitCount(mun) == 1){
                mun = '0'+mun;
            }
            secondShowWapper.innerHTML = sec;
            muniteShowWapper.innerHTML = mun;
            --count;
            ProgresBar(count,progressFirst);
        }
    }
    // console.log(count);
}

function digitCount(num) { // get variable digit function
    if(num === 0 ) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
} 


function ProgresBar(frstNumber,secondNumber) { // dynamic progrress bar function
      var ProgressElem = document.getElementById("myBar");
      var ProgressWidth = getPercentage(frstNumber,secondNumber);
      ProgressElem.style.width = ProgressWidth + "%";
      if(ProgressWidth == 50){
        ProgressElem.style.background = 'black';
      }
      else if(ProgressWidth == 20){
        ProgressElem.style.background = 'red';
      }
}

function getPercentage(progressFirst,progressSecond){ // convert a number to persentage
    return Math.floor((progressFirst / progressSecond) * 100); 
}