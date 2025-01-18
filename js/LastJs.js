// معرف زر السحاب
let mybutton = document.getElementById("myBtn");
//معرفات ضبط واجهة الإعدادات 
let setPause = document.getElementById("setPause");
let setPlay = document.getElementById("setPlay");
let audioBk = document.getElementById("audioBk");
let nightMood = document.getElementById("setNight");
let lightMood = document.getElementById("setLight");
let body = document.getElementById("getBody");
let setNightMood = document.getElementById("setNightMood");


//الأكواد البرمجية و الوظائف
// برمجة زر السحاب
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
//برمجة قائمة الإعدادات
function setPlayBK(){
  setPause.style.display="none";
  setPlay.style.display="block";
  audioBk.play();
  document.cookie = `audioBk=audioBk.play(); max-age=${12*30*24*60*60}; path=/`;
};
function setPauseBK(){
  setPause.style.display="block";
  setPlay.style.display="none";
  audioBk.pause();
}

//الوضع الليلي
function setNight(){
  nightMood.style.display="none";
  lightMood.style.display="block";
  setNightMood.style.color="#fff";
  setNightMood.style.background="#353535";
}
// الوضع النهاري
function setLight(){
  nightMood.style.display="block";
  lightMood.style.display="none";
  setNightMood.style.color="#353535";
  setNightMood.style.background="#fff";
}
document.getElementById("year").innerHTML = new Date().getFullYear();


