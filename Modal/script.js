// Objectlarni jsga chaqirib olamiz
const ShowModal = document.querySelectorAll('.showModal')
const Modal = document.querySelector('.modal')
const CloseBtn = document.querySelector('.closeBtn')
const Overlay = document.querySelector('.overlay')

// console.log(ShowModal, Modal, CloseBtn, Overlay);

// "Hidden" classini uchiramiz
const openModal=()=>{
    Modal.classList.remove('hidden')
    Overlay.classList.remove('hidden')
}
// "Hidden" classini qushamiz
const closeModal=()=>{
    Modal.classList.add('hidden')
    Overlay.classList.add('hidden')
}
// overlay bosilganda modal yopiladi
Overlay.addEventListener('click',closeModal)
// close buttonni bosganda modal yopiladi
CloseBtn.addEventListener('click',closeModal)

// Button bosilganda modal ochiladi
for (let i = 0; i < ShowModal.length; i++){
    ShowModal[i].addEventListener('click',openModal)
}

// Enter va Escape klaviaturalarni bosganda modal ochilib yopiladi
document.addEventListener('keydown',  (event)=>{
if(event.key==='Enter'){
    openModal()
}else if(event.key==='Escape'){
    closeModal()
}
})