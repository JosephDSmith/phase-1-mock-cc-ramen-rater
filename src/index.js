// fetch request to receive ramen images 
fetch("http://localhost:3000/ramens")
  .then((res) => res.json())
  .then((res) => handleRamen(res));

 
  function handleRamen(res){
    console.log(res)
    res.forEach(element => {
        let ramenMenu = document.querySelector("#ramen-menu")
        let ramenImg = document.createElement("img")
        ramenImg.src = element.image 
        ramenMenu.appendChild(ramenImg)

        ramenImg.addEventListener("click", () =>{
            let detailImg = document.querySelector(".detail-image")
            let name = document.querySelector(".name")
            let restaurant = document.querySelector(".restaurant")
            let ratingDisplay = document.querySelector("#rating-display")
            let commentDisplay =document.querySelector("#comment-display")
            detailImg.src = ramenImg.src 
            name.innerText = element.name
            restaurant.innerText = element.restaurant
            ratingDisplay.innerText = element.rating 
            commentDisplay.innerText = element.comment 
        })
    });

  
  }

  let submitForm = document.querySelector("#new-ramen")



  submitForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let newName = document.querySelector("#new-name").value
    let newRestaurant = document.querySelector("#new-restaurant").value
    let newImage = document.querySelector("#new-image").value
    let newRating = document.querySelector("#new-rating").value
    let newComment = document.querySelector("#new-comment").value
  
    let newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment,
    }
    
    handleRamen([newRamen])
  })
  


