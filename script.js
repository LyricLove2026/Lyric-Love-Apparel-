function toggleMenu(){document.getElementById('navlinks')?.classList.toggle('open')}
function filterCards(q, selector){q=q.toLowerCase();document.querySelectorAll(selector).forEach(c=>{c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none'})}
document.addEventListener('input',e=>{if(e.target.id==='svgSearch')filterCards(e.target.value,'.svg-card');if(e.target.id==='productSearch')filterCards(e.target.value,'.product-card')})
