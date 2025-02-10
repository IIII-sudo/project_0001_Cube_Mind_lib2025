// معرف زر السحاب
let mybutton = document.getElementById("myBtn");
//معرفات ضبط واجهة الإعدادات 
let setPause = document.getElementById("setPause");
let setPlay = document.getElementById("setPlay");
let audioBk = document.getElementById("audioBk");
let logOut = document.getElementById("logOffEnyclopedia");
let body = document.getElementById("body");
let setNightMood = document.getElementById("setNightMood");
let downloadModal = document.getElementById("exampleModal2");
let pwd = document.getElementById("pwd");
let usr = document.getElementById("usr");
let getname = document.getElementById('getfullname');
let getbirth = document.getElementById('birth');
let getsertifcat = document.getElementById('sertifcat');
let getphone = document.getElementById('phoneNumber');
let getmail = document.getElementById('mailUsr');
let logPopOnError = document.getElementById('');
let errorMSG = document.getElementById('errorMSG');
let spcUsrx = document.getElementById('x');
let spcUsrxx = document.getElementById('xx');
let spcUsrxxx = document.getElementById('xxx');
let spcUsrxxxx = document.getElementById('xxxx');
let spcUsrxxxxx = document.getElementById('xxxxx');
let spcUsrxxxxxx = document.getElementById('xxxxxx');
let spcUsrxxxxxxx = document.getElementById('xxxxxxx');
let spcUsrxxxxxxxx = document.getElementById('xxxxxxxx');
let spcUsrxxxxxxxxx = document.getElementById('xxxxxxxxx');
let spcUsrxxxxxxxxxx = document.getElementById('xxxxxxxxxx');
let spcUsrxxxxxxxxxxx = document.getElementById('xxxxxxxxxxx');
let spcUsrxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
let spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxxx = document.getElementById('xxxxxxxxxxxxxxxxxxxxxxxxxxx');

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
  body.style.color="#fff";
  body.style.background="#353535";
  document.cookie = `theme=night; max-age=${12*30*24*60*60}; path=/`;
}
// الوضع النهاري
function setLight(){
  nightMood.style.display="block";
  lightMood.style.display="none";
  body.style.color="#353535";
  body.style.background="#fff";
  document.cookie = `theme=light; max-age=${12*30*24*60*60}; path=/`;
}
// السنة
document.getElementById("year").innerHTML = new Date().getFullYear();



window.onload = function checkCookie() {
//موسيقى
    let audioBk = document.getElementById("audioBk");
    let musicValue = getCookie("audio");
    if (musicValue == "play") {
        setPause.style.display="none";
        setPlay.style.display="block";
        audioBk.play();
    } 
    else {
     setPause.style.display="block";
      setPlay.style.display="none";
      audioBk.pause();
      }

      let spcUsrValue = getCookie("loginUsr");
      if (spcUsrValue == "adminMohammadOdayNeen") {
        spcUsrx.style.display="block";
        spcUsrxx.style.display="block";
        spcUsrxxx.style.display="block";
        spcUsrxxxx.style.display="block";
        spcUsrxxxxx.style.display="block";
        spcUsrxxxxxx.style.display="block";
        spcUsrxxxxxxx.style.display="block";
        spcUsrxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="block";
      } 
      else if (spcUsrValue == "randome") {
        spcUsrx.style.display="none";
        spcUsrxx.style.display="none";
        spcUsrxxx.style.display="none";
        spcUsrxxxx.style.display="none";
        spcUsrxxxxx.style.display="none";
        spcUsrxxxxxx.style.display="none";
        spcUsrxxxxxxx.style.display="none";
        spcUsrxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        
        } else {
          spcUsrx.style.display="none";
          spcUsrxx.style.display="none";
          spcUsrxxx.style.display="none";
          spcUsrxxxx.style.display="none";
          spcUsrxxxxx.style.display="none";
          spcUsrxxxxxx.style.display="none";
          spcUsrxxxxxxx.style.display="none";
          spcUsrxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
          spcUsrxxxxxxxxxxxxxxxxxxxxxxxxxxx.style.display="none";
        }
  }
 


$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
  $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
  })
	},1000);
});

 $('html, body').css({
  'overflow': 'hidden',
  'height': '100%'
});


function getLogin(){
let  x = pwd.value;
let  y = usr.value;

  if ((x == "mod@admin") && (y == "mod@admin")){
    window.open('main.html', '_self');
    document.cookie = `loginUsr=adminMohammadOdayNeen; max-age=${12*30*24*60*60}; path=/`;
  } else {
    document.cookie = `loginFeild=x; max-age=${12*30*24*60*60}; path=/`;
    errorMSG.innerHTML = `<br><div class="alert alert-danger" role="alert">اسم المستخدم أو كلمة المرور غير صحيحة</div>`
    setTimeout(function() {
      errorMSG.innerHTML = ``;
  }, 1500);
  } 

};
function gestUser(){
  document.cookie = `loginUsr=randome; max-age=${12*30*24*60*60}; path=/`;
  window.open('main.html', '_self');
}

function getOut(){
  document.cookie = `loginUsr=randome; max-age=${12*30*24*60*60}; path=/`;
  window.open('index.html', '_self');
}
function getSignUp(){
  let u1 = getname.value;
  let u2 = getbirth.value;
  let u3 = getsertifcat.value;
  let u4 = getphone.value;
  let u5 = getmail.value;
  if ((u1 != "") && (u2 != "") && (u3 != "") && (u4 != "") && (u5 != "")){
    window.open('https://wa.me/+963958961441?text=  مرحباً استاذ محمد عدي نين، أود أن أتقدم بطلب تسجيل في منصة - موسوعة الفن التشكيلي - وفق البيانات:'+'%0a%0aالإسم الكامل:   '+'%0a'+u1+'%0a%0a المواليد:   '+'%0a'+u2+'%0a%0aالتحصيل العلمي:   '+'%0a'+u3+'%0a%0aرقم الهاتف:   '+'%0a'+u4+'%0a%0aالبريد الإلكتروني: '+'%0a'+u5, '_self');
  } else {
    document.cookie = `loginFeild=x; max-age=${12*30*24*60*60}; path=/`;
    errorMSG.innerHTML = `<br><div class="alert alert-danger" role="alert">من فضلك قم بملئ جميع الحقول المطلوبة.</div>`
    setTimeout(function() {
      errorMSG.innerHTML = ``;
  }, 3500);
  } 
}
function logOff(){
  document.cookie = `loginUsr=; max-age=${12*30*24*60*60}; path=/`;
}
function copyLinkWallet() {
  // Get the text field
  let copyText = document.getElementById("walletID");
  let copiedID = document.getElementById('copiedID');
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  copiedID.innerHTML = `<button class="btn btn-secondary">تم نسخ رابط المحفظة</button>`
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