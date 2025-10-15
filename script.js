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





















window.onload=kiirtel;
