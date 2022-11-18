let panel = document.querySelectorAll('.panel')
for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }














//==FAIL try with forEach and arrowFunction==
//===========================================
// let panel = document.querySelectorAll('.panel')
// panel.forEach(item => {
//     item.addEventListener('click', e =>{
//        let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += "active";
//     })
// });