const headerTag = document.querySelector("header")
const logoContainerTag = document.querySelector("header div.logo")
const logoTag = document.querySelector("header div.logo img.default")

document.addEventListener("scroll", function (){
   const pixels = window.pageYOffset
   if (pixels > 500) {
     headerTag.classList.add("scrolled")
     logoTag.style.opacity = 0
     logoContainerTag.style.height = 90 + "px"
   } else {
       headerTag.classList.remove("scrolled")
       logoTag.style.opacity = 1
       logoContainerTag.style.height = 120 + "px"
     }
   })
