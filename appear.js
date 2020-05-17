const heroHeader = document.querySelector("div.herocontainer h1")
const heroParagraph = document.querySelectorAll("div.herocontainer p")
const heroButton = document.querySelector("div.herocontainer button")
const imageCover = document.querySelector("div.heroimagecover")


const fadeIn = function (){
  heroHeader.style["animation"] = "fadein 1s 0.25s both"

  heroParagraph.forEach(p => {
    p.style["animation"] = "fadein 1s 0.75s both"
  })

  heroButton.style["animation"] = "fadein 1s 1.25s both"

  imageCover.style["animation"] = "imagecovertranslate 2s 0.25s both ease-in"
}


fadeIn()
