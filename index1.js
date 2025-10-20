function site_2() {
 window.location.href = "Videos.html"
}

const images = document.querySelectorAll('.image');
let expandedImage = null;


function crescer(event) {
  const img = event.currentTarget;

  if (expandedImage) return; 

  img.classList.add('expanded');
  expandedImage = img;


  document.addEventListener('click', clickFora);
  document.body.style.overflow = 'hidden';
}


function clickFora(event) {
  if (!expandedImage) return;


  if (!expandedImage.contains(event.target)) {
    expandedImage.classList.remove('expanded');
    expandedImage = null;

    document.removeEventListener('click', clickFora);
    document.body.style.overflow = ''; 
  }
}


images.forEach(img => {
  img.addEventListener('click', crescer);
});


