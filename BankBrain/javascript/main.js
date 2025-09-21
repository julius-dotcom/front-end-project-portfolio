// Bank search
const searchInput=document.getElementById('search');
const bankCards=document.getElementById('bankCards');
const cards=bankCards?bankCards.getElementsByClassName('bank-card'):[];

if(searchInput){
  searchInput.addEventListener('keyup',()=>{
    const filter=searchInput.value.toLowerCase();
    Array.from(cards).forEach(card=>{
      const title=card.querySelector('h3').textContent.toLowerCase();
      card.style.display=title.includes(filter)?'':'none';
    });
  });
}

// Contact form
const contactForm=document.getElementById('contactForm');
const formMessage=document.getElementById('formMessage');
if(contactForm){
  contactForm.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();
    if(name && email && message){
      formMessage.style.color='green';
      formMessage.textContent='Message sent successfully!';
      contactForm.reset();
    }else{
      formMessage.style.color='red';
      formMessage.textContent='Please fill all fields.';
    }
  });
}
