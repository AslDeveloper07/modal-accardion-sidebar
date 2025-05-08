const ShowModal = document.querySelectorAll('.showModal')
const Modal = document.querySelector('.modal')
const CloseBtn = document.querySelector('.closeBtn')
const Overlay = document.querySelector('.overlay')


const openModal=()=>{
    Modal.classList.remove('hidden')
    Overlay.classList.remove('hidden')
}
const closeModal=()=>{
    Modal.classList.add('hidden')
    Overlay.classList.add('hidden')
}
Overlay.addEventListener('click',closeModal)
CloseBtn.addEventListener('click',closeModal)

// Button bosilganda modal ochiladi
for (let i = 0; i < ShowModal.length; i++){
    ShowModal[i].addEventListener('click',openModal)
}

document.addEventListener('keydown',  (event)=>{
if(event.key==='Enter'){
    openModal()
}else if(event.key==='Escape'){
    closeModal()
}
})