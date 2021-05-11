var slideBoxWidth;
var slideBackGround;
var slideFrames;
var slideFrame;
var count = 0;

window.onload = window.onresize = function() {
  var slideBox = document.getElementsByClassName("slide-box")[0];
  slideFrames = document.getElementsByClassName("slide-frames")[0];
  slideFrame = document.getElementsByClassName("slide-frame");
  slideBackGround = document.getElementsByClassName("home-back-slide")[0];
  var st = slideBox.currentStyle || window.getComputedStyle(slideBox);
  slideBoxWidth = parseInt(st.width.substring(0, (st.width.length - 2)))
  slideFrame[0].style.width = slideBoxWidth + "px";
  changeBack();

  loopSlide();
}

function next(i){
  if(i == 1){
    if(count < slideFrame.length - 1 && count >= 0){
      count++;
      slideFrames.style.marginLeft = "-" + (slideBoxWidth * count) + "px";
      changeBack();
    }
  }else{
    if(count <= slideFrame.length && count > 0){
      count--;
      slideFrames.style.marginLeft = "-" + (slideBoxWidth * count) + "px";
      changeBack();
    }
  }
}

function changeBack(){
  st = slideFrame[count].currentStyle || window.getComputedStyle(slideFrame[count]);
  var bg = st.backgroundImage;
  var bg2 = bg.substring(bg.lastIndexOf("/"));
  var url = bg2.substring(0, bg2.length - 2);
  slideBackGround.style.backgroundImage = 'url("slideshow/' + url + '")';
}

function loopSlide(){
  var i;
  setInterval(
    () =>
    {
      if (count == 0){
        i = 1;
      }
      if (count == slideFrame.length - 1){
        i = 0;
      }
      next(i);
    }, 15000
  );
}