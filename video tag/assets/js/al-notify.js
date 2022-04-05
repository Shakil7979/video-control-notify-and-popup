var bodywapper = document.getElementById('show_notify');
var x = 0;
let alNotifyArray = [
    {
        notiImage : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
        notiTitle : 'Shakil From Bangladesh purchased the product',
        notiTime : '10 Munites ago'
    },
    {
        notiImage : 'https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg',
        notiTitle : 'Alifur From Pakistan purchased the product',
        notiTime : '5 Munites ago'
    },
    {
        notiImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjnXZWVaNMWrMu6QaAKiiLx2ZQrC7YG_D2g&usqp=CAU',
        notiTitle : 'Rabby From Japan purchased the product',
        notiTime : '2 Munites ago'
    },
    {
        notiImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXCNvb1YwUkWKk22jJBRYLeZqsKOUqiEvT5a8efTgY8FB3nBFYL5EZVQeSVsIxZ_tVbI&usqp=CAU',
        notiTitle : 'Sofiq From Chaina purchased the product',
        notiTime : '1 Munites ago'
    },
    {
        notiImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8q8Cf8lJDNz0BbakfKgZfMohxHJG4aTf4ww&usqp=CAU',
        notiTitle : 'Rafiq From Italy purchased the product',
        notiTime : '30 Second ago'
    }
];

setInterval(function() {

    if (x < alNotifyArray.length) {
        bodywapper.innerHTML = '<div class="custom-social-proof"><div class="custom-notification"><div class="custom-notification-container"><div class="custom-notification-image-wrapper"><img id="map1" src="'+alNotifyArray[x].notiImage+'" style="width: 50px; height: 50px"></div><div class="custom-notification-content-wrapper"><p class="custom-notification-content">'+alNotifyArray[x].notiTitle+'<small>'+alNotifyArray[x].notiTime+'</small></p></div></div><div class="custom-close"></div></div></div>';
    }

    if(x == alNotifyArray.length){
        x= 0
    }
    else{
        x++;
    }
    document.querySelector('.custom-close').addEventListener('click',hidenotify);

}, 5000);


function hidenotify(){
    document.querySelector('.custom-social-proof').style.display='none';
}
