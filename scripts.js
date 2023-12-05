const cavaloAudio = new Audio('cavalo.mp3')
const aiaiai = new Audio('aiaiai.mp3')
const pare = new Audio('pare.mp3')
const queissomeufilho = new Audio('queissomeufilho.mp3')

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

const ratinhoo = new Audio('raaaaaatinho.mp3')
const rapaaz = new Audio('raaapaz.mp3')

const ratinhooButton = document.querySelector("#ratinho")
const rapaazButton = document.querySelector("#rapaz")

ratinhooButton.addEventListener("click", function(){
    ratinhoo.play()
})

rapaazButton.addEventListener("click", function(){
    rapaaz.play()
})