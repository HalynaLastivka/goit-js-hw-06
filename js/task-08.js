const form = document.querySelector('.login-form');

const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();


  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
  }

  event.currentTarget.reset();
}
