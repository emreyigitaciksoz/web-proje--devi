document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('form');
    
    contactForm.addEventListener('submit', function(event) {
        alert("Form başarıyla gönderildi!");
        event.preventDefault(); // Gerçek gönderimi önlemek için
    });
});
