// let activeClass = document.querySelector('.active')
let panel = document.querySelectorAll('.panel')
for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
// .forEach(item => {
//     item.addEventListener('click', e =>{
//        let current = document.getElementsByClassName("active");
        // item.classList.toggle("active")
        // current[0].className = current[0].className.replace("active", "");
        // this.className += "active";



    // })
// });