const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener("click", function(){
    const urlId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${urlId}`
  })
}


document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src = "";
})

document.querySelector(".max").addEventListener("click", function(){
  modalOverlay.firstElementChild.classList.add("maximize");
})

document.querySelector(".min").addEventListener("click", function(){
  modalOverlay.firstElementChild.classList.remove("maximize");
})



