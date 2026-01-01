export const users =[
    {
        id:'1',
        username:'m7amad_7ader',
        image:'images/usersImages/m7mad.jpeg',
        email:'m7mad7ader@gmail.com',
        coursesEnroll:[
            {
                
            }
        ],
        password:'123'
    },
    {
        id:'2',
        username:'matt',
        image:'images/usersImages/matt.jpg',
        email:'matt@gmail.com',
        coursesEnroll:[
            {
                
            }
        ],
        password:'789'
    }
];
export let IdOfUserOnSite=JSON.parse(localStorage.getItem('id'));

export function checkUser(username ,email, password){

// let IsUser= false;
let status;

users.forEach((user)=>{
if (username.value===user.username){
    if ((email.value===user.email) && (password.value===user.password)){
        IdOfUserOnSite=user.id;
        localStorage.setItem('id',JSON.stringify(IdOfUserOnSite));
        // IsUser = true;
    }else{
        window.alert('email or password is wrong');
        // IsUser = false;
    }
}else{
    // IsUser = false;
}
});

// return IsUser; 
return IdOfUserOnSite;
}
function findUserById(){
    
}