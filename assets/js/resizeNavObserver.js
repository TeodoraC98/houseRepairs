const wrapperNavEL =document.querySelector("#wrapper-nav");
const menuEl = document.querySelector("#nav-menu")

const resizeObserver = new ResizeObserver((entries)=>{
    entries.forEach(entry=>{

        closeMenu(menuEl)
    })

} )
const closeToggle = (menu)=>{
    let idToggle=menu.dataset.idToggleSubmenu;
   const toggleMenu =document.querySelector(idToggle)
    if(toggleMenu){
        toggleMenu.classList.remove("active__toggle")
    }
 }
const closeMenu=(menu)=>{
    const childern=menu.querySelector(".show__menu")
    console.log(menu)
    if(childern){
       closeMenu(childern)
    }
    closeToggle(menu)
     menu.classList.remove("show__menu");
   
 }
 
 const toggleMenu=(getToggle)=>{

 }
resizeObserver.observe(wrapperNavEL)