// color when hover
function colorHover(element) {
      element.addEventListener("mouseover", _ => {
      element.style.cssText =
         "color: #A020F0;\
         transition: 0.15s"
   });

   element.addEventListener("mouseleave", _ => {
      element.style.cssText = "color: initial;"
   });
};

// minimize the paragraph
function minimize(button, p) {
   button.onclick = function () {
      p.classList.toggle("hidden");
      if (p.classList.contains("hidden"))
         p.style.display = "none";
      else
         p.style.display = "block";
   }
};

//---------------------------------------------
//---------------------------------------------

// Minimize the paragraph by button

let min = document.querySelector(".minimize");
let p = document.querySelector(".fixed-p");

minimize(min, p);

// Minimize the paragraph by h
let head = document.querySelector(".card-head");
minimize(head, p);

// color when hover on the head card
colorHover(head);

//---------------------------------------------
//---------------------------------------------

// color when hover on the fisrt popup

let fisrtPopUp = document.querySelector(".questions .fq .first-popup");
colorHover(fisrtPopUp);

// Minimize the paragraph by button
let fbtn = document.querySelector(".questions .fq .first-btn");
let fp = document.querySelector(".questions .first-response");
minimize(fbtn, fp);

// Minimize the paragraph by head
minimize(fisrtPopUp, fp);

//---------------------------------------------
//---------------------------------------------

// color when hover on the fisrt popup

let secondPopUp = document.querySelector(".questions .sq .second-popup");
colorHover(secondPopUp);

// Minimize the paragraph by button
let sbtn = document.querySelector(".questions .sq .second-btn");
let sp = document.querySelector(".questions .second-response");
minimize(sbtn, sp);

// Minimize the paragraph by head
minimize(secondPopUp, sp);

//---------------------------------------------
//---------------------------------------------

// color when hover on the fisrt popup

let thirdPopUp = document.querySelector(".questions .tq .third-popup");
colorHover(thirdPopUp);

// Minimize the paragraph by button
let tbtn = document.querySelector(".questions .tq .third-btn");
let tp = document.querySelector(".questions .third-response");
minimize(tbtn, tp);

// Minimize the paragraph by head
minimize(thirdPopUp, tp);