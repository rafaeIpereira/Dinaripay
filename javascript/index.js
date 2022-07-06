const form =  document.getElementById('form');
const nome =  document.getElementById('nome');
const cpf =  document.getElementById('cpf');
const email =  document.getElementById('email');
const nasci =  document.getElementById('nasci');
const genero =  document.getElementById('genero');
const senha = document.getElementById('senha');
const senha2 =  document.getElementById('senha2');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value.trim();
    const cpfValue = cpf.value.trim();
    const emailValue = email.value.trim();
    const nasciValue = nasci.value.trim();
    const generoValue = genero.value.trim();
    const senhaValue = senha.value.trim();
    const senha2Value = senha2.value.trim();

    if (nomeValue === '') {
        setErrorFor(nome, 'Preencha o campo nome');
    } else {
        setSuccessFor(nome);
    }

    
    if (cpfValue === '') {
        setErrorFor(cpf, 'Preencha o campo cpf');
    } else {
        setSuccessFor(cpf);
    }

    
    if (nasciValue === '') {
        setErrorFor(nasci, 'Preencha o campo nascimento');
    } else {
        setSuccessFor(nasci);
    }


    if (generoValue === '') {
        setErrorFor(genero, 'Preencha o campo genero');
    } else {
        setSuccessFor(genero);
    }


    if (emailValue === '') {
        setErrorFor(email, 'Preencha o campo e-mail');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'E-mail não é válido');
    } else {
        setSuccessFor(email);
    }

    if (senhaValue === '') {
        setErrorFor(senha, 'Preencha o campo senha');
    } else {
        setSuccessFor(senha);
    }

    if (senha2Value === '') {
        setErrorFor(senha2, 'Preencha o campo senha');
    } else if (senhaValue !== senha2Value) {
        setErrorFor(senha2, 'As senhas não coincidem');
    } else {
        setSuccessFor(senha2);
    }

}

function setErrorFor(input, mensagem) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = mensagem;
    
    formControl.className = 'form-control erro';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucesso';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

