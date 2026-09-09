/* ================= INTERNET BANKING LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("loginMessage");


        if (username === "" || password === "") {

            message.textContent =
                "Please enter both username and password.";

            message.style.color = "#c0392b";

            return;
        }


        message.textContent =
            "Demo login successful! Welcome to AYESHA BANK.";

        message.style.color = "#087f5b";

    });
}


/* ================= PASSWORD SHOW / HIDE ================= */

const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", function() {

        const password =
            document.getElementById("password");

        const icon =
            this.querySelector("i");


        if (password.type === "password") {

            password.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            password.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });
}


/* ================= EMI CALCULATOR ================= */

function calculateEMI() {

    const amount =
        parseFloat(document.getElementById("loanAmount").value);

    const annualRate =
        parseFloat(document.getElementById("interestRate").value);

    const years =
        parseFloat(document.getElementById("loanTenure").value);


    if (!amount || !annualRate || !years) {

        document.getElementById("emiResult").textContent =
            "Enter valid values";

        return;
    }


    const monthlyRate =
        annualRate / 12 / 100;

    const months =
        years * 12;


    const emi =
        amount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);


    document.getElementById("emiResult").textContent =
        "₹ " +
        emi.toLocaleString("en-IN", {
            maximumFractionDigits: 0
        });

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        const response =
            document.getElementById("contactResponse");


        if (name === "" || email === "" || message === "") {

            response.textContent =
                "Please complete the required fields.";

            response.style.color = "#c0392b";

            return;
        }


        response.textContent =
            "Thank you! Your message has been submitted successfully.";

        response.style.color = "#087f5b";

        contactForm.reset();

    });
}