import express from "express";


const app = express()


app.listen(4800, ()=>
    console.log('server connected')

)

document.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
      const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
    }
  
    document.querySelector(".mobile-menu").addEventListener("click", toggleMenu);
  });
  