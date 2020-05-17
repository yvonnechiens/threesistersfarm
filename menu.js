//almost there - only issue is menus for about us and contact don't close
//when you click on their links while their menus are open


//when loading page, menus jump out. feel like this could be fixed if i use left: -30vw instead of transform


const navTag = document.querySelector("nav")
const menuButton = document.querySelector("header div.menu")
const bodyOpacity = document.querySelector("div.body-opacity")
const closeButton = document.querySelector("nav img.close")
const arrowTag = document.querySelector("nav li img")


const aboutCloseButton = document.querySelector("section#about-us img.close")
const contactCloseButton = document.querySelector("section#contact img.close")

const aboutUsLink = document.querySelector("nav li#about-us")
const aboutUsOpened = document.querySelector("section#about-us")

const contactLink = document.querySelector("nav li#contact")
const contactOpened = document.querySelector("section#contact")

const shopLink = document.querySelector("nav li#shop")

const body = document.querySelector("body")



//open menu

menuButton.addEventListener("click", function(){
  navTag.classList.add("open")
  bodyOpacity.style.visibility = "visible"
  body.style.overflowY = "hidden"
})

const closeMenu = function(){
  navTag.classList.remove("open")
  aboutUsOpened.classList.remove("open")
  bodyOpacity.style.visibility = "hidden"
  navTag.style.backgroundColor = "#FFF"
  aboutUsLink.style.transform = "translate(-50px,0)"
  arrowTag.style.opacity = 0
  body.style.overflowY = "scroll"
  detailCard.forEach(card => {
    card.style.transform = "translate(0, 100vh)"
  })
  detailCloseIcon.style.transform = "translate(0, 100vh)"
}

bodyOpacity.addEventListener("click", function(){
  closeMenu()
})

closeButton.addEventListener("click", function(){
  closeMenu()
})

//hover effects

const linkTag = document.querySelectorAll("nav li")
const arrowTags = document.querySelectorAll("nav li img")


linkTag.forEach(link => {

  link.addEventListener("mouseover", function(){
    link.style.transform = "translate(0,0)"

    const arrowTags = link.querySelector("img")
      arrowTags.style.transform = "translate(0,0)"
      arrowTags.style.opacity = 1


  })

  link.addEventListener("mouseout", function(){
    link.style.transform = "translate(-50px,0)"

    const arrowTags = link.querySelector("img")
      arrowTags.style.transform = "translate(-5px,0)"
      arrowTags.style.opacity = 0


  })

})


//shop

const shopSection = document.querySelector("section#products")
const shopButton = document.querySelector("div.herocontainer a")
const headerOffset = 150
const sectionPosition = shopSection.getBoundingClientRect().top
const offsetPosition = sectionPosition - headerOffset
const scrollToShop = function (){
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })
}

shopLink.addEventListener ("click", function (){
  scrollToShop()
  closeMenu()
  closeContact()
  closeAboutUs()
})




//about us


//define function to open about us page
const openAboutUs = function(){
  aboutUsOpened.classList.add("open")
  contactOpened.classList.remove("open")
  navTag.style.backgroundColor = "#BCE4E9"
  closeButton.style.opacity = 0
  closeButton.style.cursor = "default"

  contactLink.style.transform = "translate(-50px,0)"
  arrowTagContact.style.transform = "translate(-5px,0)"
  arrowTagContact.style.opacity = 0
}

//fix states of links to show active/inactive
const arrowTagAboutUs = aboutUsLink.querySelector("img")


//close detail menu function
const closeAboutUs = function(){
  aboutUsOpened.classList.remove("open")
  navTag.style.backgroundColor = "#FFF"
  closeButton.style.opacity = 1
  closeButton.style.cursor = "pointer"
  aboutUsLink.style.transform = "translate(-50px,0)"
  arrowTagAboutUs.style.transform = "translate(-5px,0)"
  arrowTagAboutUs.style.opacity = 0
}

//if About Us section has class of .open, About Us link should close it on click
//else About Us link should open About us Section

if (aboutUsOpened.classList.contains("open")){

  aboutUsLink.style.color = "red"

} else {
  aboutUsLink.addEventListener("click", function(){

    const linkActive = function () {
      if (aboutUsOpened.classList.contains("open")){
      aboutUsLink.style.transform = "translate(0,0)"
      arrowTagAboutUs.style.transform = "translate(0,0)"
      arrowTagAboutUs.style.opacity = 1
    } else {
      aboutUsLink.style.transform = "translate(-50px,0)"
      arrowTagAboutUs.style.transform = "translate(-5px,0)"
      arrowTagAboutUs.style.opacity = 0
    }}

    openAboutUs()
    linkActive()

    aboutUsLink.addEventListener("mouseout", function(){
      linkActive()
    })

    aboutCloseButton.addEventListener("click", function(){
      closeAboutUs()
    })

  })
}

//contact


const openContact = function (){
  contactOpened.classList.add("open")
  aboutUsOpened.classList.remove("open")
  navTag.style.backgroundColor = "#DFC4DF"
  closeButton.style.opacity = 0
  closeButton.style.cursor = "default"

  aboutUsLink.style.transform = "translate(-50px,0)"
  arrowTagAboutUs.style.transform = "translate(-5px,0)"
  arrowTagAboutUs.style.opacity = 0

}

const arrowTagContact = contactLink.querySelector("img")


//close detail menu function
const closeContact = function(){
  contactOpened.classList.remove("open")
  navTag.style.backgroundColor = "#FFF"
  closeButton.style.opacity = 1
  closeButton.style.cursor = "pointer"
  contactLink.style.transform = "translate(-50px,0)"
  arrowTagContact.style.transform = "translate(-5px,0)"
  arrowTagContact.style.opacity = 0
}


if (contactOpened.classList.contains("open")){

  //not working

  contactLink.addEventListener("click", function(){
    closeContact()
  })
} else {
  contactLink.addEventListener("click", function(){

    const linkActive = function () {
      if (contactOpened.classList.contains("open")){
      contactLink.style.transform = "translate(0,0)"
      arrowTagContact.style.transform = "translate(0,0)"
      arrowTagContact.style.opacity = 1
    } else {
      contactLink.style.transform = "translate(-50px,0)"
      arrowTagContact.style.transform = "translate(-5px,0)"
      arrowTagContact.style.opacity = 0
    }}

    openContact()
    linkActive()

    contactLink.addEventListener("mouseout", function(){
      linkActive()
    })

    contactCloseButton.addEventListener("click", function(){
      closeContact()
    })

  })
}
