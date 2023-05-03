let form=document.querySelector('#my-form');

form.addEventListener('submit',add);

function add(e){
    e.preventDefault();
    let name=document.querySelector('#name');
    localStorage.setItem('name'+localStorage.length,name.value);
    let email=document.querySelector('#email');
    localStorage.setItem('email'+localStorage.length,email.value);
    
}