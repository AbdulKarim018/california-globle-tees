// JavaScript to change the background color when mouse goes over navbar
document.getElementById("navbar").addEventListener("mouseover", function () {
  this.style.backgroundColor = "black";
});

document.getElementById("navbar").addEventListener("mouseout", function () {
  if (window.scrollY > 0) return (this.style.backgroundColor = "black");
  if (window.innerWidth > 768 && window.scrollY <= 0) {
    this.style.opacity = "0.9";
    this.style.backgroundColor = "transparent";
  }
});
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (this.window.scrollY > 0) {
    navbar.style.opacity = "0.9";
    navbar.style.backgroundColor = "black"; // Change background color to black
  }
  if (window.scrollY <= 0 && window.innerWidth > 768) {
    navbar.style.backgroundColor = "transparent"; // Change background color back to transparent
  }
});
