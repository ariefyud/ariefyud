const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

img1.onmouseover = img1.onmouseout = changeImage1;
img2.onmouseover = img2.onmouseout = changeImage2;
img3.onmouseover = img3.onmouseout = changeImage3;
img4.onmouseover = img4.onmouseout = changeImage4;
img5.onmouseover = img5.onmouseout = changeImage5;
img6.onmouseover = img6.onmouseout = changeImage6;


function changeImage1(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img1').src ='img/color-1.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img1').src ='img/black-1.jpg'
  }
}

function changeImage2(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img2').src ='img/color-2.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img2').src ='img/black-2.jpg'
  }
}

function changeImage3(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img3').src ='img/color-3.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img3').src ='img/black-3.jpg'
  }
}

function changeImage4(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img4').src ='img/color-4.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img4').src ='img/black-4.jpg'
  }
}

function changeImage5(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img5').src ='img/color-5.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img5').src ='img/black-5.jpg'
  }
}

function changeImage6(e) {
  if (event.type == 'mouseover') {
    document.getElementById('img6').src ='img/color-6.jpg'
  }
  if (event.type == 'mouseout') {
    document.getElementById('img6').src ='img/black-6.jpg'
  }
}
