let form=document.querySelector('#my-form');

form.addEventListener('submit',add);

function add(e){
    e.preventDefault();
    let name=document.querySelector('#name');
    let email=document.querySelector('#email');

    let myobj={
        name:name.value,
        email:email.value
    };
    localStorage.setItem('my obj',JSON.stringify(myobj));
    
    
    
}