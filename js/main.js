// Navigation Bar Compress into single Item.
$('.menu-toggle').click(function(){
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});


// Hide/SHow navigation bar
{
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("navbar--hidden");
    } else {
      nav.classList.remove("navbar--hidden");
    }

    lastScrollY = window.scrollY;
  });
}


// Experience Section
let button = document.getElementsByTagName("button"),len = button.length,i;
let out0=document.getElementById("out0"); // Title
let out1=document.getElementById("out1"); // Workplace
let out2=document.getElementById("out2"); // Dates
let hisUp=document.getElementById("his-Up");
let hisSc=document.getElementById("his-Sc");
let hisAp=document.getElementById("his-Ap");
let hisSc2=document.getElementById("his-Sc2");
let hisSt=document.getElementById("his-St");
let hisMu=document.getElementById("his-Mu");

// Default Title: Workplace
out0.innerHTML = "Full Stack Engineer "
out1.innerHTML = "@ #100DEVS";
out2.innerHTML = "Jan 2022 - Present";
hisUp.style.display = "block"; 

// Function to switch workplace
function click() {
// Title Automatic
out1.innerHTML = "@ "+(this.value);
// Dates
switch (this.value) {
case "#100DEVS":
  out0.innerHTML = "Full Stack Engineer "
  out2.innerHTML = "Jan 2022 - Present";
  hisUp.style.display = "block"; 
  changeMe(hisSc);changeMe(hisAp),changeMe(hisSc2),changeMe(hisSt),changeMe(hisMu);
  break;
case "Freelance":
  out0.innerHTML = "Front-End Developer "
  out2.innerHTML = "Mar 2021 - Jan 2022";
  hisSc.style.display = "block"; 
  changeMe(hisUp);changeMe(hisAp),changeMe(hisSc2),changeMe(hisSt),changeMe(hisMu);
  break;
case "STARCO/KENDA":
  out0.innerHTML = "Mechanical Design Engineer "
  out2.innerHTML = "Feb 2017 - Nov 2021";
  hisAp.style.display = "block";  
  changeMe(hisUp);changeMe(hisSc),changeMe(hisSc2),changeMe(hisSt),changeMe(hisMu);  
  break;  
case "Y.S.P":
  out0.innerHTML = "Deputy President/Front-End Developer "
  out2.innerHTML = "Oct 2016 - Feb 2017";
  hisSc2.style.display = "block";  
  changeMe(hisUp);changeMe(hisSc),changeMe(hisAp),changeMe(hisSt),changeMe(hisMu);  
  break;  
case "Intervate Ltd":
  out0.innerHTML = "Mechanical Design Engineer "
  out2.innerHTML = "Oct 2014 - Feb 2016";
  hisSt.style.display = "block";  
  changeMe(hisUp);changeMe(hisSc),changeMe(hisAp),changeMe(hisSc2),changeMe(hisMu);  
  break;   
}
}

// Initialise click() function
for(i=0;i<len;i+=1){
button[i].onclick=click;}


// Clearing the other job histories
let changeMe = (key)=> {
key.style.display="none"
};  