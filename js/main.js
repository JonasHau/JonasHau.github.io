function tab(tab) {
  document.getElementById("homeMenu").style.display = "none"
  document.getElementById("skillMenu").style.display = "none"
  document.getElementById("aboutMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
tab("homeMenu")