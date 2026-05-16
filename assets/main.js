document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Formulario demo. Luego lo conectaremos a Mailchimp, Brevo, ConvertKit o una base de datos.");
      form.reset();
    });
  });
});
