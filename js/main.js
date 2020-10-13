function myFunction() {
   var dots = document.getElementById('dots');
   var moreText = document.getElementById('more');
   var btnText = document.getElementById('myBtn');

   if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
   } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
   }
}
function importFunction() {
   var dots = document.getElementById('dot');
   var moreText = document.getElementById('mors');
   var btnText = document.getElementById('myBt');

   if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
   } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
   }
}
function exportFunction() {
   var dots = document.getElementById('dos');
   var moreText = document.getElementById('moe');
   var btnText = document.getElementById('mBtn');

   if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
   } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
   }
}
