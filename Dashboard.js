const options = document.getElementById("arrow");
const dropdown = document.getElementById("dotOptions");



options.addEventListener('click' ,function(){
  if (dropdown.style.display=="none") {
    dropdown.style.display= "block";
  } else {
    dropdown.style.display= "none";
  }
})


// **********

dropdown.addEventListener('click',()=>{
  dropdown.style.display='none'
})
// 
const menu=document.getElementById('menu');
const sidePanel=document.getElementById('sidePanel');


menu.addEventListener('click',()=>{
  if(sidePanel.style.background=='#1a1919'){
    sidePanel.style.background=' #1a1919';
    sidePanel.style.width= '5%';
    sidePanel.style.height=' 100pc';
  }
})
