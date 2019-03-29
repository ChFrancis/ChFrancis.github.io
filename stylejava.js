function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    alert("text")
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function Imenu(x) {
  x.classList.toggle("change");
    dropdown();
}