// Minimal JS: progressive enhancement and accessibility helpers
document.addEventListener('DOMContentLoaded', function(){
  // Example: focus outline for keyboard users
  document.body.classList.remove('no-js');

  // Contact form validation
  var form = document.getElementById('contactForm');
  if (form) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var status = document.getElementById('contactStatus');

    function showError(el, msg) {
      var help = document.getElementById(el.id + 'Help');
      el.classList.add('is-invalid');
      if (help) help.textContent = msg;
    }
    function clearError(el) {
      var help = document.getElementById(el.id + 'Help');
      el.classList.remove('is-invalid');
      if (help) help.textContent = '';
    }

    function validEmail(e) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    }

    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var valid = true;
      status.textContent = '';

      if (!name.value || name.value.trim().length < 2) {
        showError(name, 'Ingresa tu nombre (mínimo 2 caracteres)'); valid = false;
      } else { clearError(name); }

      if (!email.value || !validEmail(email.value.trim())) {
        showError(email, 'Ingresa un email válido'); valid = false;
      } else { clearError(email); }

      if (!message.value || message.value.trim().length < 10) {
        showError(message, 'Escribe un mensaje más detallado (mínimo 10 caracteres)'); valid = false;
      } else { clearError(message); }

      if (valid) {
        status.textContent = 'Gracias — tu mensaje fue validado (simulación de envío).';
        status.classList.remove('text-danger');
        status.classList.add('text-success');
        form.reset();
      } else {
        status.textContent = 'Por favor, revisa los campos señalados.';
        status.classList.remove('text-success');
        status.classList.add('text-danger');
      }
    });
  }
});

// Initialize AOS if available
if (window.AOS) { AOS.init(); }
