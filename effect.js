//declarations to the classes or ids in the html files
const img=document.querySelector('.mainImg');
let msg=document.getElementById('msg');
const first_name=document.querySelector('.name');
const change=document.querySelector('.mainDisplay nav');
const font_incre = document.querySelector('.font-inc');
const reset = document.querySelector('#font-reset');
const font_decre= document.querySelector('.font-dec');
const dark=document.querySelector('.darkbox');
const brown = document.querySelector('.brownbox');
/*https://unsplash.com/photos/omoCm0bvNW4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
https://unsplash.com/photos/g1Kr4Ozfoac?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
https://unsplash.com/photos/gOq27RHoL3s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
https://unsplash.com/photos/wpU4veNGnHg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
https://unsplash.com/photos/Bs-zngH79Ds?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
https://unsplash.com/photos/PP1UkTDYJkc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
*/
//code to implement the images slider in the home page
//array is below
const images=[
    'images/apple.jpg',
    'images/building1.jpg',
    'images/people.jpg',
    'images/products.jpg',
    'images/building2.jpg',
 ];
 let currentImage = 0;
//function to be called for the slider
 function myImage(){
    currentImage = currentImage + 1;
    img.src = images[currentImage];
 
    if (currentImage >= images.length){
       currentImage = 0;
       img.src = images[currentImage];
    }
 }
// code to determine to interval between each images and the function is called here
 setInterval(myImage,3000)
// code to implement the customised presentation required 
 function increaseFont(){
   change.setAttribute('id', 'incre');
   localStorage.fontsize= 'larger'; 
   }
   function decreaseFont(){
      change.setAttribute('id', 'decre');
      localStorage.fontsize= 'smaller'; 
       }   
       function resetFont(){
         change.setAttribute('class', 'res');
         localStorage.fontsize= 'medium'; 
           }      
           function blackColor(){
            change.setAttribute('class', 'darker');
               }
               function brownColor(){
                  change.setAttribute('class', 'browner');
                   }
//This calls the function and carrys out the task based on a particular response
font_incre.addEventListener('click',increaseFont);
font_decre.addEventListener('click',decreaseFont);   
reset.addEventListener('click',resetFont); 
dark.addEventListener('click', blackColor) ;
brown.addEventListener('click', brownColor);

 



















