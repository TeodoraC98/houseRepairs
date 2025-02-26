const submenusEls = document.querySelectorAll(".nav__submenu");
const showNavigation=(menuId, toggleId )=>{
    const menu=document.getElementById(menuId),
       toggle=document.querySelector(toggleId);
       console.log(menu)
        toggle.addEventListener("click",()=>{
           
        if(!menu.classList.contains("show__menu")){
            menu.classList.add("show__menu");
            toggle.classList.add("active__toggle")}
        else if(menu.classList.contains("show__menu")){
            menu.classList.remove("show__menu");
            toggle.classList.remove("active__toggle")}
        if(toggle.dataset.idSibling) {
                closeDisplaySiblingMenu(toggle.dataset.idSibling)
            } 
})
} 
const showMenus =(menus)=>{
    menus.forEach(item =>{
        if(item.id && item.dataset.idToggleSubmenu)
        {
            showNavigation(item.id, item.dataset.idToggleSubmenu)
        }

    })
}

showMenus(submenusEls)

 const showMainNavigation=(menuId,toggleSelectorClass)=>{

    const mainToggles=document.querySelectorAll(toggleSelectorClass),
    mainMenu=document.querySelector(menuId);
    mainToggles.forEach(toggle=> {
        toggle.addEventListener("click",()=>{
            toggle.classList.toggle("active__toggle");
             mainMenu.classList.toggle("show__menu");
        })
    })
 }
showMainNavigation("#nav-menu", ".nav__toggle");


const closeDisplaySiblingMenu=(idSelector) =>{
  const menuSibling=document.querySelector(idSelector);
  console.log(menuSibling, idSelector)
        if( menuSibling.classList.contains("show__menu")){
            const toggle=document.querySelector(menuSibling.dataset.idToggleSubmenu);
            toggle.classList.remove("active__toggle");
             menuSibling.classList.remove("show__menu");    
   }

}


