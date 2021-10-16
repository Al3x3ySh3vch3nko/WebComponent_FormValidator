const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = `form-control error`

    const small = formControl.querySelector(`small`)
    small.innerHTML = message
}

function showSuccess(input)
{
    const formControl = input.parentElement
    formControl.className = `form-control success`
}

function emailValidation(email)
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

function checkRequired(inputArray)
{
    inputArray.forEach(function(input)
    {
        if(input.value.trim() === ``)
        {
            showError(input, `is required.`)

        }
        else
        {
            showSuccess(input)
        }
    })
}


form.addEventListener(`submit`, submitForm)
function submitForm(event)
{
    event.preventDefault();

    // if (username.value === "")
    // {
    //     showError(username, 'User Name is required')
    // }
    // else
    // {
    //     showSuccess(username)
    // }
    //
    // if (email.value === "")
    // {
    //     showError(email, 'Email is required')
    // }
    // else if(!emailValidation(email.value))
    // {
    //     showError(email, 'Correct Email is required')
    // }
    // else
    // {
    //     showSuccess(email)
    // }
    //
    // if (password.value === "")
    // {
    //     showError(password, 'Password is required')
    // }
    // else
    // {
    //     showSuccess(password)
    // }
    //
    // if (password2.value === "")
    // {
    //     showError(password2, 'Confirm Password is required')
    // }
    // else
    // {
    //     showSuccess(password2)
    // }

    checkRequired([username, email, password, password2])
}
