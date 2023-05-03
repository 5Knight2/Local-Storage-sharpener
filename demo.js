let form=document.querySelector('#my-form');
let ul=document.querySelector('ul');

form.addEventListener('submit',add);
ul.addEventListener('click',remove);


function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        console.log(e.target.parentElement);
        

        for(let i=0;i<localStorage.length;i++){
            let obj=JSON.parse(localStorage.getItem(localStorage.key(i)));
            let str=obj.name+'-'+obj.email+'-'+obj.mobile;
            
            let str2=e.target.parentElement.textContent;
            str2=str2.substring(0,str2.length-6);
           
            if(str==str2){
                localStorage.removeItem(obj.email);
                
            }
        }

        ul.removeChild(e.target.parentElement);
        
    }
}

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
    let btn=document.createElement('button');
    btn.style.backgroundColor='red';
    btn.appendChild(document.createTextNode('Delete'));
    btn.className='delete';

    
    li.appendChild(btn);
    ul.appendChild(li);    
}