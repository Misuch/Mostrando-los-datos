// Menu
const hamburger= document.querySelector("#nav-menu");
const menu= document.querySelector("#menu");

menu.addEventListener("click", ()=>{
    // alert("click")
    hamburger.classList.toggle("show");
})

window.addEventListener("click", e =>{
    if(hamburger.classList.contains("show")&& e.target != hamburger &&  e.target != menu){
        hamburger.classList.toggle("show");
    }

})

// Pop up
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});