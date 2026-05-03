function myFunction() {
    var x = document.getElementById("myNavLinks");
    if (x.className === "navLinks") {
      x.className += " responsive";
    } else {
      x.className = "navLinks";
    }
  }