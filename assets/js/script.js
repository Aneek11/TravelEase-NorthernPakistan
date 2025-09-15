// simple contact form client-side validation
document.addEventListener('DOMContentLoaded',()=>{
  const form = document.querySelector('#contactForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    const name = form.querySelector('[name=name]').value.trim();
    const email = form.querySelector('[name=email]').value.trim();
    const msg = form.querySelector('[name=message]').value.trim();
    if(name.length < 3){ alert('Name must be at least 3 characters'); e.preventDefault(); return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ alert('Enter a valid email'); e.preventDefault(); return;}
    if(msg.length < 10){ alert('Message must be at least 10 characters'); e.preventDefault(); return;}
    alert('Form validated (this is static demo) — message would be sent in a dynamic app.');
  });
});
