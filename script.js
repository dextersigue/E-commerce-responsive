// if click the icon bar show the menu
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
} 

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

//////////////////////////////// 
//script of single product
//if click the small show in the main image
const mainImg = document.querySelector('#mainImg');
const smallImg = document.querySelector('.small-img-group');
const imgs = smallImg.querySelectorAll('img');

    for(img of imgs){
        img.addEventListener('click', (e) =>{
            let newImg = e.target.getAttribute('src')
            mainImg.setAttribute('src', newImg)
        })
    }

//if click the image in shop page. html redirect to single page
function productLink(){
    window.location.href="singleProduct.html"
}



