const cavaloAudio = new Audio('sounds/cavalo.mp3')
const aiaiai = new Audio('sounds/aiaiai.mp3')
const pare = new Audio('sounds/pare.mp3')
const queissomeufilho = new Audio('sounds/queissomeufilho.mp3')

const cavaloButton = document.querySelector("#cavalo")
const pareButton = document.querySelector("#pare")
const queissoButton = document.querySelector("#queisso")
const aimamaeButton = document.querySelector("#aimamae")

cavaloButton.addEventListener("click", function(){
    cavaloAudio.play()
})

pareButton.addEventListener("click", function(){
    pare.play()
})

queissoButton.addEventListener("click", function(){
    queissomeufilho.play()
})

aimamaeButton.addEventListener("click", function(){
    aiaiai.play()
})

const ratinhoo = new Audio('sounds/raaaaaatinho.mp3')
const rapaaz = new Audio('sounds/raaapaz.mp3')

const ratinhooButton = document.querySelector("#ratinho")
const rapaazButton = document.querySelector("#rapaz")

ratinhooButton.addEventListener("click", function(){
    ratinhoo.play()
})

rapaazButton.addEventListener("click", function(){
    rapaaz.play()
})