document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    // Show in console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Message:", message);

    alert("Message Sent Successfully!");

    // Clear form
    this.reset();
});