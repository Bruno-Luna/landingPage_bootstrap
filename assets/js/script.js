let email1 = document.querySelector('#exampleFormControlInput1');
let message1 = document.querySelector('#exampleFormControlTextarea1');

let emailOk = false;
let messageOk = false;

function email(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email1.value.indexOf('@')== -1 || email1.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = '#FF0000'
    }else{
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = '#008000'
        emailOk = true
    }
}

function message(){
    let txtMsg = document.querySelector('#txtMessage');
 
    if (message1.value.length >= 100){
        txtMsg.innerHTML = 'O texto é muito grande, por favor reduza-o.'
        txtMsg.style.color = '#FF0000'
        txtMsg.style.display = 'block'
    }else
     txtMsg.style.display = 'none'
     messageOk = true
}

