var mobile = document.getElementById('toggle-bars');
var close = document.getElementById('closed');
var open = document.getElementById('nav-mobile');
var overlay = document.getElementById('overlay');



if(mobile){
    mobile.addEventListener('click', (e)=>{
        e.preventDefault();
        open.style.display='block';
        overlay.style.display= 'block';
        mobile.style.display='none';
    })
}
if(close){
    close.addEventListener('click', (e)=>{
        e.preventDefault();
        open.style.display='none';
        overlay.style.display= 'none';
        mobile.style.display='block';
    })
}
