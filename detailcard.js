const productCard = document.querySelectorAll("div.product-item")

const detailCloseIcon = document.querySelector("img.detailcard-close")

const detailCard = document.querySelectorAll("section.detail")

const openDetailCard = function (){
  bodyOpacity.style.visibility = "visible"
  body.style.overflowY = "hidden"
  detailCloseIcon.style.transform = "translate(0, 0)"
}

detailCloseIcon.addEventListener("click", function(){
  closeMenu()
})



productCard.forEach(card => {

  card.addEventListener("click", function(){

    if(card.getAttribute("data-item") == "Chubby-Chicken-Recipe") {
      detailCard.forEach(detailCard => {
        if(detailCard.getAttribute("data-item") == "Chubby-Chicken-Recipe"){
          detailCard.style.transform = "translate(0, 0)"
        }
      })
    } else if (card.getAttribute("data-item") == "Pudgy-Pork-Recipe") {
      detailCard.forEach(detailCard => {
        if(detailCard.getAttribute("data-item") == "Pudgy-Pork-Recipe"){
          detailCard.style.transform = "translate(0, 0)"
        }
      })
    } else if (card.getAttribute("data-item") == "Stocky-Salmon-Recipe") {
      detailCard.forEach(detailCard => {
        if(detailCard.getAttribute("data-item") == "Stocky-Salmon-Recipe"){
          detailCard.style.transform = "translate(0, 0)"
        }
      })
    } else if (card.getAttribute("data-item") == "Variety-Pack") {
      detailCard.forEach(detailCard => {
        if(detailCard.getAttribute("data-item") == "Variety-Pack"){
          detailCard.style.transform = "translate(0, 0)"
        }
      })
    } else if (card.getAttribute("data-item") == "Tubby-Tuna-Treats") {
      detailCard.forEach(detailCard => {
        if(detailCard.getAttribute("data-item") == "Tubby-Tuna-Treats"){
          detailCard.style.transform = "translate(0, 0)"
        }
      })
    }

   openDetailCard()

    })

})



const freeShip = document.querySelector("div.product-item.free-shipping")

freeShip.addEventListener("click", function(){
  closeMenu()
})
