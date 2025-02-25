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


// document.addEventListener("DOMContentLoaded", function () {
//     const text = document.getElementById("innovator-text");
//     const viewMoreBtn = document.getElementById("view-more-btn");
  
//     let expanded = false;
//     viewMoreBtn.addEventListener("click", function () {
//       if (!expanded) {
//         text.style.maxHeight = "none"; // Show full text
//         viewMoreBtn.textContent = "View Less";
//       } else {
//         text.style.maxHeight = "80px"; // Shorten text
//         viewMoreBtn.textContent = "View More";
//       }
//       expanded = !expanded;
//     });
//   });
  