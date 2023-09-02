const pass = document.getElementById("password")
const conf_pass = document.getElementById("confirm_password")

// pass.addEventListener("change", confirmPassword)
// conf_pass.addEventListener("change", confirmPassword)

const error_span = document.createElement("span")
        error_span.textContent = "* Password do not match"
        error_span.classList.add('error')
        pass.parentElement.appendChild(error_span)

function confirmPassword() {
    if(pass.value !== conf_pass.value) {
        const error_span = document.createElement("span")
        error_span.textContent = "* Password do not match"
        error_span.classList.add('error')
        pass.insertAdjacentElement('afterend', error_span)
    }
}