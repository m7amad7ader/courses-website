import{checkUser}from '../scripts/Users.js'

const SignInForm=document.querySelector('#SignInForm-js');
const UserNameElement =document.querySelector('.username-js');
const EmailElement =document.querySelector('.email-js');
const PasswordElement =document.querySelector('.password-js');

SignInForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const check=checkUser(UserNameElement,EmailElement,PasswordElement);

    console.log(check);
    if (check){
        window.location.replace('index.html');
    }else{
        
    }
});
