let form=document.querySelector('#my-form');

form.addEventListener('submit',add);

function add(e){
    e.preventDefault();
    let name=document.querySelector('#name');
    let email=document.querySelector('#email');
    let mob=document.querySelector('#mob');

    let myobj={
        name:name.value,
        email:email.value,
        mobile:mob.value
    };
    localStorage.setItem(email.value,JSON.stringify(myobj));

    let ul=document.querySelector('ul');
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(name.value+'-'+email.value+'-'+mob.value));
    ul.appendChild(li);
    
    
    
    
}