// document.getElementById('click').addEventListener('click', changeImage);
// let slideIndex = 0;
// function funonload() {
//     let i;
//     let mySlides = document.getElementById("image");
//     for (i = 0; i < mySlides.length; i++) {
//         mySlides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > mySlides.length) {slideIndex = 1}
//     mySlides[slideIndex-1].style.display = "block";
//     setTimeout(funonload, 2000);
// };





changeImage();
let intervalId;

function startSlideShow() {
    intervalId=setInterval(changeImage, 1000);
}
function stopSlideShow(){
    clearInterval(intervalId);
}


function changeImage() {

    let imageSrc = document.getElementById('image').getAttribute('src');
    let currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf('/') + 1, imageSrc.lastIndexOf('/') + 2)
    if (currentImageNumber ==4){
        currentImageNumber=0;
    }


    let newImage = "./img/" + (Number(currentImageNumber) + 1) + '.jpg';
    // document.getElementById('result').innerHTML = newImage;


    document.getElementById('image').setAttribute('src', newImage);


}



