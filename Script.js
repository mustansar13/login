let signinbtn = document.getElementById('signinBtn');
let signupbtn = document.getElementById('signupBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');
let underline = document.getElementById('underline');
let text = document.getElementById('text');




signinbtn.onclick = function () {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    underline.style.transform = 'translateX(35px)';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    text.innerHTML = 'Lost Password '
}



signupbtn.onclick = function () {
    nameField.style.maxHeight = '65px';
    title.innerHTML = 'Sign Up';

    underline.style.transform = 'translateX(0px)';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    text.innerHTML = 'Password Suggestions '
}