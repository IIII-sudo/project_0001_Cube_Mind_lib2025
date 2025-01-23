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
let downloadModal = document.getElementById("exampleModal2");


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }

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
  document.cookie = `audio=play; max-age=${12*30*24*60*60}; path=/`;
};
function setPauseBK(){
  setPause.style.display="block";
  setPlay.style.display="none";
  audioBk.pause();
  document.cookie = `audio=pause; max-age=${12*30*24*60*60}; path=/`;

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
// السنة
document.getElementById("year").innerHTML = new Date().getFullYear();

window.onload = function checkCookie() {
// window.location.reload(true);

    let audioBk = document.getElementById("audioBk");
    let musicValue = getCookie("audio");
    if (musicValue == "play") {
        setPause.style.display="none";
        setPlay.style.display="block";
        audioBk.play();
    } else {
     setPause.style.display="block";
      setPlay.style.display="none";
      audioBk.pause();
      }
  }
// Disable right-click with an alert
document.addEventListener('contextmenu', function(e) {
 // alert("تحذير: الموقع محمي بحقوق الملكية!");
  e.preventDefault();
});

// Disable specific keyboard shortcuts
document.onkeydown = function(e) {
  if (e.keyCode == 123) { // Disable F12
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Disable Ctrl+Shift+I
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Disable Ctrl+Shift+C
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Disable Ctrl+Shift+J
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Disable Ctrl+U
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { // Disable Ctrl+S
    return false;
  }
};