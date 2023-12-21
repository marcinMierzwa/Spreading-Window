const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toogleFlexPanel);
  // panel.addEventListener("click", toogleText);
});

function toogleFlexPanel() {
  this.classList.toggle("larger");
  this.classList.toggle("open-active");
}

function toogleText(e) {
}


