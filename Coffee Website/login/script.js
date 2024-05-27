const container = document.getElementById ('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');
const popup = document.getElementsByClassName("popup");
const popupBtn = document.getElementById("open-popup-btn");
const dismissBtn = document.getElementById("dismiss-popup-btn");


signUpButton.addEventListener("click", function() {
    event.preventDefault(); // Prevent the default form submission
    document.getElementsByClassName("popup")
    [0].classList.add("active");
});
    
dismissBtn.addEventListener("click",function(){
    document.getElementsByClassName("popup")
    [0].classList.remove("active");
});

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});
signInButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Credenciales estáticas
    const validEmail = 'doutreleaugaston@gmail.com';
    const validPassword = 'holasoygaston';

    // Obtener valores ingresados
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (email === validEmail && password === validPassword) {
        window.location.href = '../dashboard/index.html'; // Redirect to the desired page
    } else {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Correo electrónico o contraseña incorrectos';
        messageElement.style.color = 'red';
        messageElement.align = 'center';
    }

});


