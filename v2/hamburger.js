// document.addEventListener("DOMContentLoaded", () => {
//     const menu = document.querySelector(".menu");
//     const menuItems = document.querySelectorAll(".menuItem");
//     const hamburger= document.querySelector(".hamburger");
//     const closeIcon= document.querySelector(".closeIcon");
//     const menuIcon = document.querySelector(".menuIcon");

//     function toggleMenu() {
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.remove("showMenu");
//         closeIcon.style.display = "none";
//         menuIcon.style.display = "block";
//     } else {
//         menu.classList.add("showMenu");
//         closeIcon.style.display = "block";
//         menuIcon.style.display = "none";
//     }
//     }

//     hamburger.addEventListener("click", toggleMenu);

//     menuItems.forEach( 
//     function(menuItem) { 
//         menuItem.addEventListener("click", toggleMenu);
//     }
//     )
// });
document.addEventListener("DOMContentLoaded", () => {
    const sideNav = document.querySelector(".sideNav")
    const overlay = document.querySelector(".overlay")
    const ham = document.querySelector(".ham")
    const menuX = document.querySelector(".menuX")
    const menuItems = document.querySelectorAll(".menuLink")

    menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHamburger)
    })

    ham.addEventListener("click", toggleHamburger)
    menuX.addEventListener("click", toggleHamburger)
    overlay.addEventListener("click", toggleHamburger)

    function toggleHamburger() {
    overlay.classList.toggle("showOverlay")
    sideNav.classList.toggle("showNav")
    }

});