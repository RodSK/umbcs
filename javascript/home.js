var slideBoxWidth;
var slideBackGround;
var slideFrames;
var slideFrame;
var count = 0;
var slideTimer;
var dr;
var timerSeconds = 15000;

window.onload = window.onresize = function() {
  var slideBox = document.getElementsByClassName("slide-box")[0];
  slideFrames = document.getElementsByClassName("slide-frames")[0];
  slideFrame = document.getElementsByClassName("slide-frame");
  slideBackGround = document.getElementsByClassName("home-back-slide")[0];
  var st = slideBox.currentStyle || window.getComputedStyle(slideBox);
  slideBoxWidth = parseInt(st.width.substring(0, (st.width.length - 2)))
  for(var i=0; i<slideFrame.length; i++){
    slideFrame[i].style.width = slideBoxWidth + "px";
  }
  slideFrames.style.marginLeft = "-" + (count * slideBoxWidth) + "px";
  changeBack();
  clearInterval(slideTimer);
  slideTimer = setInterval(timer, timerSeconds);
}

function next(i, resetTimer){
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
  if(resetTimer){
    clearInterval(slideTimer);
    slideTimer = setInterval(timer, timerSeconds);
  }
}

function changeBack(){
  st = slideFrame[count].currentStyle || window.getComputedStyle(slideFrame[count]);
  var bg = st.backgroundImage;
  var bg2 = bg.substring(bg.lastIndexOf("/"));
  var url = bg2.substring(0, bg2.length - 2);
  slideBackGround.style.backgroundImage = 'url("slideshow/' + url + '")';
}

function timer(){
  if (count == 0){
    dr = 1;
  }
  if (count == slideFrame.length - 1){
    dr = 0;
  }
  next(dr, false);
}