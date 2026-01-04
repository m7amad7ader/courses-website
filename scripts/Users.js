import { courses } from "./courses.js";

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
export let usercourses=JSON.parse(localStorage.getItem('coursesEnroll'))||[];

export function addCourses (courseId){
    let savedCourseId;
    usercourses=JSON.parse(localStorage.getItem('coursesEnroll'))||[];

for (let i=0;i<=users.length-1;i++){
    if (users[i].id==IdOfUserOnSite){
        if (users[i].coursesEnrollIds){
            for(let j=0;j<= courses.length-1;j++){
                if (courses[j].courseId==courseId){//get the course info from his array
                    savedCourseId=courseId;
                    console.log('course found');
                    break;
                }else{
                    continue;
                }
            }
            if (savedCourseId){
                let isExist=false;
                for(let j=0;j<=usercourses.length-1;j++){
                    if (usercourses[j]==savedCourseId){//check if already exist in dashboard
                        console.log('already exist');
                        isExist=true;
                        break;
                    }else{
                        continue;
                }
            }
            if (!isExist){//if not exist add the course and save.
                users[i].coursesEnrollIds.push(courseId);
                localStorage.setItem('coursesEnroll',JSON.stringify(users[i].coursesEnrollIds));
                console.log('added');
            }else {
                break;
            }
            }
        }
    }
}
    // saveToLocalStorage();
}
// function saveToLocalStorage(){
//     localStorage.setItem('users',JSON.stringify(users));
// }