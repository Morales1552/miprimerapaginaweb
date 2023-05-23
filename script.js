function showAlert() { alert
    ("!Esta es una alerta desde Java Script!");
}

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.ariaValueMax;

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electronico valido.');
    } else {
        alert('Correo electronico envaido correctamente. ');
    }
}

container-nav {
    display: flex;
    padding: 10px
    height: 50px;
    background-color: black;
}

.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.brand {
    display: flex;
    align-items: clearInterval;
}

li>a {
    padding: 8px 24px;
}

li {
    list-style-type: none;
}

a {
    color: white;
    text-decoration: none;
}

.nav-link {
    display: flex;
    align-items: center;
}

.button-menu-toggle {
    display: none;
}

document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})