
const form = document.getElementById("registrationform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // GET FORM VALUES
    const rollno = document.getElementById("rollno").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const day = document.querySelector('[name="dobDay"]').value;
    const month = document.querySelector('[name="dobMonth"]').value;
    const year = document.querySelector('[name="dobYear"]').value;

    const mobile = document.getElementById("mobile").value.trim();
    const studentClass = document.getElementById("class").value;

    // ROLL NUMBER VALIDATION
    if (rollno === "") {
        alert("Please enter roll number");
        return;
    }

    // NAME VALIDATION
    if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        return;
    }

    // EMAIL VALIDATION
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email");
        return;
    }

    // DATE OF BIRTH VALIDATION
    if (day === "" || month === "" || year === "") {
        alert("Please select date of birth");
        return;
    }

    // MOBILE NUMBER VALIDATION
    if (!/^\d{10}$/.test(mobile)) {
        alert("Enter a valid 10 digit mobile number");
        return;
    }

    // CLASS VALIDATION
    if (studentClass === "") {
        alert("Please select a class");
        return;
    }

    // SUCCESS MESSAGE
    const message = document.getElementById("message");

    message.textContent = "Registration Successful! Welcome " + name;
    message.style.color = "green";

    // RESET FORM
    form.reset();

});
