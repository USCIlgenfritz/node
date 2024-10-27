document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const favoriteDriver = document.getElementById("favorite-driver").value;
    const feedback = document.getElementById("feedback").value;
    const messageDiv = document.getElementById("message");

    if (!firstName || !lastName || !email || !feedback) {
      messageDiv.innerHTML =
        "<p style='color: red;'>Please fill out all required fields.</p>";
      return;
    }

    messageDiv.innerHTML =
      "<p style='color: green;'>Thank you for your feedback!</p>";

    document.getElementById("contact-form").reset();
  });