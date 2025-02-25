import express from "express";


const app = express()


app.listen(4800, ()=>
    console.log('server connected')

)

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Attach the function to the menu button click event
document.querySelector(".mobile-menu").addEventListener("click", toggleMenu);
