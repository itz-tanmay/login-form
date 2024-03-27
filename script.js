let passwordInput = document.getElementById('password-input');
let passwordCheckbox = document.getElementById('checkbox');

passwordCheckbox.addEventListener('change', ()=>{
    if(passwordCheckbox.checked){
        passwordInput.type = 'text';
    }else{
        passwordInput.type = 'password';
    }
})
console.log("Hello World!")