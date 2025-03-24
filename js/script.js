const boxBtnOpenMenu = document.getElementById("box-btn-open-menu");
const menuMobile = document.getElementById("menu-mobile");
const overlayMenu = document.getElementById("overlay-menu");
const boxBtnCloseMenu = document.getElementById("box-btn-close-menu");

const linksMenuDesktop = document.querySelectorAll(".menu-desktop a");

const contactBtn = document.querySelector(".box-contact-btn button");

const linksMenuMobile = document.querySelectorAll(".menu-mobile a");
const sections = document.querySelectorAll("section");


//====================================
//ABERTURA E FECHAMENTO DO MENU MOBILE
//====================================

boxBtnOpenMenu.addEventListener("click", ()=>{
    menuMobile.classList.add("open-menu");
});

boxBtnCloseMenu.addEventListener("click", ()=>{
    menuMobile.classList.remove("open-menu");
});

overlayMenu.addEventListener("click", ()=>{
    menuMobile.classList.remove("open-menu");
});


//====================================
//AÇÕES EM CASO DE CLICKS NO MENU
//====================================

linksMenuDesktop.forEach((link, index) => {
    link.addEventListener("click",()=>{
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});
contactBtn.addEventListener("click", ()=>{
    document.querySelector("section.section-form").scrollIntoView({behavior: "smooth"});
})

linksMenuMobile.forEach((link, index) => {
    link.addEventListener("click",()=>{
        sections[index].scrollIntoView({ behavior: "smooth" });
        boxBtnCloseMenu.click();
    });
});

// linksMenuMobile.forEach((link, index) => {
//     link.addEventListener("click",()=>{
//         const top = sections[index].offsetTop;
//         window.scrollTo({
//             top: top,
//             behavior: "smooth"
//         })
//     });
// });

