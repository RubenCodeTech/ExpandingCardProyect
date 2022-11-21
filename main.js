let panel = document.querySelectorAll('.panel')
for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }














