const btn = document.getElementById('submit');
document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_vhlf1zb';
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                btn.innerHTML = 'Email Enviado!';
                setTimeout(() => {
                    btn.innerHTML = "Enviar"
                }, 5000)
                document.getElementById('contactForm').reset();
            }, function(err) {
                btn.innerHTML = 'Error' + err;
                setTimeout(() => {
                    btn.innerHTML = "Enviar"
                }, 5000)
            });
            
    });