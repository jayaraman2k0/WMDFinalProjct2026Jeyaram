function showMessage() {
    alert("Welcome! Let's get started.");
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

    document.querySelector("form").reset();
}