// Display alert when clicking on a featured car
function showCarDetails(name, color, price) {
    alert(`Car Name: ${name}\nColor: ${color}\nPrice: ${price}`);
}

// Show an alert when viewing featured cars
function showFeaturedCars() {
    alert("Check out our top featured cars below!");
}

// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("formMessage").innerText = "Thank you for reaching out!";
    document.getElementById("contactForm").reset();
});
