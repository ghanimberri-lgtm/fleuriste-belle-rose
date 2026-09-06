// NOVA Generated Script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const body = Object.fromEntries(data);
    alert('Merci ' + body.name + '! Votre message a bien été envoyé.');
    form.reset();
}