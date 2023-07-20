let name = document.querySelector('#name');
let rollno = document.querySelector('#RollNo');
let branch = document.querySelector('#branch');
let email = document.querySelector('#mail');
let textcontent = document.querySelector('#textcontent');
let button = document.querySelector('#btn');
let submit = document.querySelector('.submit');
let Male = document.querySelector('#Male');
let Female = document.querySelector('#Female');
let Other = document.querySelector('#Other');
let container = document.querySelector('.container');
let input = document.querySelectorAll('input');



let getrandom1 = ()=>{

    return  Math.floor(Math.random() * (650 - (-650)+ 1) + (-650));
}
let getrandom2 = ()=>{

    return  Math.floor(Math.random() * (150 - (-500)+ 1) + (-500));
}

let show = ()=>{

let flag = false;


   button.addEventListener('mouseenter' , ()=>{
    
    if(Male.checked){
        flag = true;
    }
    if(Female.checked){
        flag = true;
    }
    if(Other.checked){
        flag = true;
    }

    if(name.value == "" || rollno.value == "" || branch.value == "" || email.value == "" || textcontent.value == "" || flag == false){

     let random1 = getrandom1();
     let random2 = getrandom2();
     console.log(random1);
     console.log(random2);


     button.style.transform = `translate(${random1}px , ${random2}px )`;
     button.style.transitionDuration = '0.4s';
     for(let i =0 ;i<input.length ;i++){
       input[i].classList.add('common');
     }
     
    }
    else{
    //     for(let i =0 ;i<input.length ;i++){
    //    input[i].classList.add('common');
    //  }

        button.addEventListener('click' , ()=>{
            container.innerHTML = `<p> Your Form is Successfully Submitted </p>`
        })
    }

   })
}


show();
