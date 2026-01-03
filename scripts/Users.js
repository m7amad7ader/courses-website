export const users =[
    {
        id:'1',
        username:'m7amad_7ader',
        image:'images/usersImages/m7mad.jpeg',
        email:'m7mad7ader@gmail.com',
        coursesEnrollIds:
        JSON.parse(localStorage.getItem('coursesEnroll'))
        ||
        [
            
        ]
        ,
        password:'123'
    },
    {
        id:'2',
        username:'matt',
        image:'images/usersImages/matt.jpg',
        email:'matt@gmail.com',
        coursesEnrollIds:[
            
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
export let usercourses=JSON.parse(localStorage.getItem('coursesEnroll'));

export function addCourses (courseId){
for (let i=0;i<=users.length-1;i++){
if (users[i].id==IdOfUserOnSite){
    if(users[i].coursesEnrollIds){
        let savedCourseId;
        for (let j=0;;j++){
            savedCourseId=users[i].coursesEnrollIds[j];
            if(savedCourseId==courseId){
                console.log('already exist');
                break;
            }else{
                users[i].coursesEnrollIds.push(courseId);
                localStorage.setItem('coursesEnroll',JSON.stringify(users[i].coursesEnrollIds));
                console.log('added');
                break;
            }
        }
        break;
    }
    }
}
    // saveToLocalStorage();
}
// function saveToLocalStorage(){
//     localStorage.setItem('users',JSON.stringify(users));
// }