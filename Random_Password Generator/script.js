
let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerset = "abcdefghijklmnopqrstuvwxyz"
let numberset = "0123456789";
let symbolset = "!@#$%^&*()<>[]{}\|";
let password = ""

let passbox = document.getElementById('pass-box');
let totalchar = document.getElementById('total-char');
let uppercase = document.getElementById('upper-case');
let lowercase = document.getElementById('lower-case');
let symbols = document.getElementById('symbols');
let numbers = document.getElementById('numbers');
let button = document.getElementById('btn');

let getrandom = (dataset)=>{

    return dataset[Math.floor(Math.random()*dataset.length)];

}


let getpassword = (password) =>{

    if(uppercase.checked){

        password+= getrandom(upperset)

    }
    if(lowercase.checked){

        password+= getrandom(lowerset)              

    }
    if(numbers.checked){

        password+= getrandom(numberset)              

    }
    if(symbols.checked){

        password+= getrandom(symbolset)

    }

    if(password.length < totalchar.value){
        return getpassword(password);
    }    
    passbox.innerText = password;
}

button.addEventListener('click',()=>{

    if(uppercase.checked || lowercase.checked || numbers.checked || symbols.checked){
        getpassword(password);
    }
    else{
        passbox.innerHTML = '<p>Please check one of boxes</p>';
    }
        
    
})

