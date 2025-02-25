import express from "express";


const app = express()


app.listen(4800, ()=>
    console.log('server connected')

)

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".mobile-menu");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
