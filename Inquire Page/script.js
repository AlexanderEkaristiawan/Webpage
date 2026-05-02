const form = document.getElementById("inquire-form");
const responseMessage = document.getElementById("form-response");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("fullName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !subject || !message) {
    showResponse("Please complete every field before sending.", "error");
    return;
  }

  form.querySelector("button").disabled = true;
  showResponse("Sending your inquiry…", "success");

  window.setTimeout(() => {
    form.reset();
    showResponse("Thanks! Your inquiry has been submitted successfully.", "success");
    form.querySelector("button").disabled = false;
  }, 700);
});

function showResponse(text, type) {
  responseMessage.textContent = text;
  responseMessage.className = `form-response ${type}`;
}
