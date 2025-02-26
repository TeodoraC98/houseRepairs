const headerEl = document.getElementById("header");
 const imgLogo=document.querySelector("#id--intro-home")
 const homeIntroObtion={ 
    rootMargin:"-200px 0px 0px 0px"
 };
 const homeIntroObserver= new  IntersectionObserver(function(entries, homeIntroObserver ){
    entries.forEach(entry=>{
         if(!entry.isIntersecting){
            headerEl.classList.add("header__scrolled")
         }else{
            headerEl.classList.remove("header__scrolled")
         }
    })
 },
homeIntroObtion)
homeIntroObserver.observe(imgLogo)
// console.log(headerEl)
// window.addEventListener("scroll", ()=>{
//     if(window.scrollY > 300){
//         headerEl.classList.add("header__scrolled");
//         imgLogo.classList.add("show__img");
       
//     }else if(window.scrollY===0){
//             headerEl.classList.remove("header__scrolled");
//             imgLogo.classList.remove("show__img")
        
//     }
// })
// window.addEventListener("resize", ()=> {
//     if(window.innerWidth>1118){
//         const listElements=document.querySelectorAll(".show__menu")
//         if(listElements.length>0){
//         listElements.forEach(element =>{
//             element.classList.remove("show__menu")
//         })
//     }
//     }
// })
// var initialWidth;
// var counter=0;
// function debounceResizeWindow (cb, delay = 200){
// let timeout;
// return (...args)=>{
//    counter++;
//    console.log(counter)
//    clearTimeout(timeout);
//    timeout = setTimeout(()=>{
//       counter=0;
//       cb(...args)
//    },delay
//    )
// }
// } 
// const deleteVizibleMenus=()=>{
//    const listElements=document.querySelectorAll(".show__menu")
//    if(listElements.length>0){
// listElements.forEach(element =>{
//      element.classList.remove("show__menu")
//    })
// }}
// const updateSizeWindow = debounceResizeWindow(width =>{
//    if(initialWidth >= 1118 & width <= 1118){
//       deleteVizibleMenus();
//    } else if(initialWidth < 1118 & width > 1118){
//       deleteVizibleMenus();
//    }
// })
// let resize= false;

// window.addEventListener("resize", ()=>{
//    if(counter==0){
//       initialWidth=window.innerWidth;
//    }
//    updateSizeWindow(window.innerWidth)
// })