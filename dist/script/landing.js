const moreBtn = document.querySelector('#more-link');
const moreSection = document.querySelector('#more');

moreBtn.addEventListener('click', ()=>{
    moreSection.style.display = 'block';
    moreBtn.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
})