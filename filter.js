
const filterTags = document.querySelectorAll("div.filter li")
//filtering
  //when user clicks on a filterTag, display:none to all elements that don't have the corresponding data-type


  //call out each of the three filter links
  const filterAll = document.querySelector("div.filter li.filter-all")
  const filterWetFood = document.querySelector("div.filter li.filter-wetfood")
  const filterTreats = document.querySelector("div.filter li.filter-treats")

  //call out product item tag
  const productItemTag = document.querySelectorAll("div.product-item")

  //when user clicks filter wet food, display: none if data-type is not wet-food
  filterWetFood.addEventListener("click", function(){
    productItemTag.forEach(tag => {
      if (tag.getAttribute("data-type") == "wet-food"){
        tag.style.display = "flex"
      } else {
        tag.style.display = "none"
      }

    })

    //make wet food active link

    filterTags.forEach(tag =>{
      if (tag.classList.contains("filter-wetfood")){
        tag.classList.add("active")
      } else {
        tag.classList.remove("active")
      }
    })


  })

  //when user clicks filter treats, display: none if data-type is not treats
  filterTreats.addEventListener("click", function(){
    productItemTag.forEach(tag => {
      if(tag.getAttribute("data-type") == "treats") {
        tag.style.display = "flex"
      } else {
        tag.style.display = "none"
      }
    })

    filterTags.forEach(tag =>{
      if (tag.classList.contains("filter-treats")){
        tag.classList.add("active")
      } else {
        tag.classList.remove("active")
      }
    })


  })

  //when user clicks all, all are shown
  filterAll.addEventListener("click", function(){
    productItemTag.forEach(tag =>{
      tag.style.display = "flex"
    })

    filterTags.forEach(tag =>{
      if (tag.classList.contains("filter-all")){
        tag.classList.add("active")
      } else {
        tag.classList.remove("active")
      }
    })


  })
