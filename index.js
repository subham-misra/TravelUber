console.log("project");

let user = document.getElementById('user');
let mail = document.getElementById('mail');
let phone = document.getElementById('phone');
let validuser = false;
let validmail = false;
let validphone = false;
$('#fail').hide();
$('#success').hide();
//console.log(user);
user.addEventListener('blur', () => {
    var regex = /([A-Za-z0-9]){2,10}$/;
    var val = user.value;
    console.log(regex, val);
    if (regex.test(val)) {
        console.log("valide input");
        user.classList.remove('is-invalid');
        validuser = true;
    }
    else {
        console.log("invalide!!!!");
        user.classList.add('is-invalid');
        validuser = false;
    }
})
console.log(mail);

mail.addEventListener('blur', () => {
    var regex = /^([A-Za-z0-9]){5,15}@gmail.com$/;
    var val = mail.value;
    console.log(regex, val);
    if (regex.test(val)) {
        console.log("valide input");
        mail.classList.remove('is-invalid');
        validmail = true;
    }
    else {
        console.log("invalide!!!!");
        mail.classList.add('is-invalid');
        validmail = false;

    }
})
console.log(phone);

phone.addEventListener('blur', () => {
    var regex = /^([0-9]){10}$/;
    var val = phone.value;
    console.log(regex, val);
    if (regex.test(val)) {
        console.log("valide input");
        phone.classList.remove('is-invalid');
        validphone = true;

    }
    else {
        console.log("invalide!!!!");
        phone.classList.add('is-invalid');
        validphone = false;

    }
})


let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    console.log('submit');
    e.preventDefault();
    let success = document.getElementById('success');
    let fail = document.getElementById('fail');

    if (validphone && validuser && validmail) {
        success.classList.add('show');
        fail.classList.remove('show');
        console.log('success')
        $('#fail').hide();
        $('#success').show();
    }
    else {
        success.classList.remove('show');
        fail.classList.add('show');

        console.log('fail')
        $('#fail').show();
        $('#success').hide();

    }

})