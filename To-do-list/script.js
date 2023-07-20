
let deletebtn = document.querySelector('.delete');
let content = document.getElementById('taskcontent');
let todobox = document.querySelector('.to-do');

content.addEventListener('keyup' , (event) =>{

    let todoli = document.createElement('li'); 
  
   if(event.key == 'Enter'){
    if(content.value != ""){

        todobox.append(todoli);
        todoli.innerHTML = ` ${content.value}
        <ion-icon name="close" class="delete"></ion-icon>`
    }  
    content.value = "";      
   }

   todoli.addEventListener('click', ()=>{
       todoli.classList.toggle('marked');
        
   })

   todoli.querySelector('.delete').addEventListener('click' , ()=>{
    todoli.remove();
   })
   
})      