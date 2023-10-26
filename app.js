// When hamburger menu is clicked fire event click
document.querySelector("#menu").addEventListener('click', ()=>{
    document.querySelector('nav ul').classList.toggle('show-menu');
})