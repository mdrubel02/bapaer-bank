document.getElementById('login-button').addEventListener('click', function(){
    console.log('clicked');
    const inputEmail=document.getElementById('input-email');
    const inputEmailText=inputEmail.value;
    console.log(inputEmailText);
    const inputPassword=document.getElementById('input-password');
    const inputPasswordText=inputPassword.value;
    console.log(inputPasswordText);
    if(inputEmailText == 'mdibrahim529907@gmail.com' && inputPasswordText=='Rubel231947'){
        window.location.href='http://127.0.0.1:5500/bapaer-bank-html-file/account.html';
    }
    else{
        alert('please valid informaiton');
    }
})