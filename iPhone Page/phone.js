const phoneImages = ["images/Black.png", "images/Blue.png", "images/Pink.png", "images/Starlight.png"]
let phoneCont = document.getElementById("phoneShow")


let black = document.getElementById("black")
let blue = document.getElementById("blue")
let pink = document.getElementById("pink")
let starlight = document.getElementById("starlight")


let defaultImgItems = `<img src= "${phoneImages.at(0)}">`
phoneCont.innerHTML = defaultImgItems

let blueImgItems = `<img src= "${phoneImages.at(1)}">`
let pinkImgItems = `<img src= "${phoneImages.at(2)}">`
let starImgItems = `<img src= "${phoneImages.at(3)}">`




black.addEventListener("click", function(){
    phoneCont.innerHTML = defaultImgItems
})

blue.addEventListener("click", function(){
    phoneCont.innerHTML = blueImgItems
})

pink.addEventListener("click", function(){
    phoneCont.innerHTML = pinkImgItems
})

starlight.addEventListener("click", function(){
    phoneCont.innerHTML = starImgItems
})



   
