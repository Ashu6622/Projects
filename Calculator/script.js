

let screen = document.getElementById('screen');
let btns = document.querySelectorAll('.btn');
let del = document.getElementById('delete');
// console.log(del);
let string = "";


btns.forEach( (buttons)=>{
    buttons.addEventListener('click', (e)=>{
        

        if(e.target.innerHTML == 'C'){
            string = "";
            screen.value = '0';
        }
        else if(e.target.innerHTML== '=' ){
            let ans = eval(string);
            screen.value = ans;
        }
        else{
            string+=e.target.innerHTML;
            screen.value = string;
        }
    })
})

del.addEventListener('click' , ()=>{
    let strlen = string.length;
    string = string.slice(0,strlen-1);
})
