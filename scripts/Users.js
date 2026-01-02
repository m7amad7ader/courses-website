export const users =[
    {
        id:'1',
        username:'m7amad_7ader',
        image:'images/usersImages/m7mad.jpeg',
        email:'m7mad7ader@gmail.com',
        coursesEnroll:[
            {
                //courses that user joined "this feature is not add yet"
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
                //courses that user joined "this feature is not add yet"
            }
        ],
        password:'789'
    }
];
export let IdOfUserOnSite=JSON.parse(localStorage.getItem('id'));

export function checkUser(username ,email, password){

for(let i=0;users.length;i++){
if (username.value===users[i].username){
    if ((email.value===users[i].email) && (password.value===users[i].password)){
        IdOfUserOnSite=users[i].id;
        localStorage.setItem('id',JSON.stringify(IdOfUserOnSite));
        return true;
        }
    }
}
    window.alert('email or password is wrong');
    return false;
}