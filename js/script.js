const form = document.getElementById('contactForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!fullName || !email || !subject || !message){
        alert('please fill all fields');
        return
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('please enter a valid email');
        return
    }
    alert('form submitted successfully');
    form.reset()
})