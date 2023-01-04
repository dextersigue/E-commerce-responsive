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
// if click the small show in the main image


    let mainImg = document.getElementById('mainImg');
    let smallImg = document.getElementsByClassName('smallImg');

    smallImg.addEventListener("click", showImage);

    function showImage(){
        for(j=0; j<smallImg.length; j++){
         mainImg.src = smallImg[j].src;
    }
  
    for(i = 0; i < smallImg.length; i++){
        smallImg[i].onclick = function(){
               showImage();
            }
        }
    }





// smallImg[i].onclick = function(){
//     mainImg.src = smallImg[i].src;
// }

// smallImg[1].onclick = function(){
//     mainImg.src = smallImg[1].src;
// }

// smallImg[2].onclick = function(){
//     mainImg.src = smallImg[2].src;
// }

// smallImg[3].onclick = function(){
//     mainImg.src = smallImg[3].src;
// }

