function randomszam(x){
    return Array.from({length: x}, () => Math.floor(Math.random() * 10)).join('');
}
function telefonszamok(){
return `0670${randomszam(7)}`;
}

function kiirtel(){
 const elem = document.getElementById("tel");
 const telszam = telefonszamok();
  elem.textContent = telszam;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}





function valasztas(ivn) {
      if (ivn) {
        alert(telefonszamok())
      }
      else{
        alert("Reméljük később meggondolod magad.")
      }
    }


function kerdes() {
      let valasz = confirm("Biztosan fel szeretnéd hívni?");
      valasztas(valasz);
    }







window.onload= kiirtel()