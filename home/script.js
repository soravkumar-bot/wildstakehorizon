function toggleMenu() {
document.getElementById("nav").classList.toggle("active");
}

window.addEventListener("scroll", function() {
const header = document.querySelector("header");
header.style.background = window.scrollY > 50 
? "rgba(0,0,0,0.8)" 
: "rgba(255,255,255,0.05)";
});


// Active Navigation Highlight
document.addEventListener("DOMContentLoaded", function() {
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
if(link.getAttribute("href") === currentPage){
link.classList.add("active");
}
});
});