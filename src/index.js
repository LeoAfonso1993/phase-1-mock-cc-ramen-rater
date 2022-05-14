function serverLoad(){
    fetch("http://localhost:3000/ramens")
      .then((response) => response.json())
      .then((obj) => {showRamen(obj)})
}


const newRamenForm = document.getElementById("new-ramen").addEventListener("submit", (newRamen))
const menu = document.getElementById("ramen-menu")


  function newRamen(e){
      e.preventDefault()
      let newRamenObj = {
         name: e.target.name.value,
         restaurant: e.target.restaurant.value,
         image: e.target.image.value,
         rating: e.target.rating.value,
         comment: e.target.comment.value
      }
 
      const configurationObject = {
         method:"POST",
         headers: {
             "Content-type":"application/json",
         },
         body: JSON.stringify(newRamenObj)
     };

     fetch("http://localhost:3000/ramens", configurationObject)
      .then((response) => response.json())
      .then((obj) => {
         let img = document.createElement("img")
         menu.appendChild(img)
         img.src = obj.image
      })
      .then(() => document.location.reload())
     


  }


function showRamen(ramens){
    
    ramens.forEach(element => {
        let img = document.createElement("img")
        img.src = element.image
        menu.appendChild(img)

        img.addEventListener("click", () => {
            let bigPic = document.querySelector(".detail-image")
            let imgName = document.querySelector(".name")
            let imgPlace = document.querySelector(".restaurant")
            let rate = document.querySelector("#rating-display")
            let comment = document.querySelector("#comment-display")
            bigPic.src = element.image
            imgName.innerText = element.name
            imgPlace.innerText = element.restaurant
            rate.innerText = element.rating
            comment.innerText = element.comment
        })
    });
}

document.addEventListener("DOMContentLoaded", serverLoad)


//______________________________________________________________________________

// write your code here
// See all ramen images in the div with the id of ramen-menu. 
// When the page loads, request the data from the server to get 
// all the ramen objects. Then, display the image for each of the 
// ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info
// about that ramen displayed inside the #ramen-detail div and 
// where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. 
// The new ramen should be added to the#ramen-menu div. 
// The new ramen does not need to persist; in other words, 
// if you refresh the page, it's okay that the new ramen is no 
// longer on the page.


// window.addEventListener("DOMContentLoaded", (event) => {showMenu()});

// const menu = document.getElementById("ramen-menu")
// const newRamenForm = document.getElementById("new-ramen").addEventListener("submit", (newRamen))

//  function newRamen(e){
//      e.preventDefault()
//      let newRamenObj = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         image: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target.comment.value
//      }
 
//      const configurationObject = {
//         method:"POST",
//         headers: {
//             "Content-type":"application/json",
//         },
//         body: JSON.stringify(newRamenObj)
//     };

//     fetch("http://localhost:3000/ramens", configurationObject)
//      .then((response) => response.json())
//      .then((obj) => {
//         let img = document.createElement("img")
//         menu.appendChild(img)
//         img.src = obj.image
//      })
//      .then(() => document.location.reload())
     


//  }

//  function showMenu() {
//      const configurationObject = {
//          method:"GET",
//          headers: {
//              "Content-type":"application/json",
//              Accept: "application/json",
//          },
//          body: JSON.stringify()
//      }

//      fetch("http://localhost:3000/ramens", configurationObject)
//      .then((response) => response.json())
//      .then((obj) => {
//         //console.log(obj)
//         let bigPic = document.querySelector(".detail-image")
//         let childImg = menu.getElementsByTagName("img")

//         for(let i=0; i < obj.length; i++){
//             let img = document.createElement("img")
//             let imgName = document.querySelector(".name")//obj[i].name
//             let imgPlace = document.querySelector(".restaurant")//obj[i].restaurant

//             menu.appendChild(img)
//             img.src = obj[i].image


//             for(const item of childImg){
//                 item.addEventListener("click", (e) => {
//                     e.preventDefault
//                     console.log(item)
//                     bigPic.src = item.src
//                     imgName.innerText = obj[i].name
//                     imgPlace.innerText = obj[i].restaurant
                    
//                 })
//             }
//         }
        
//          })

//     }
     

    



