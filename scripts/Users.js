export const users =[
    {
        id:'1',
        username:'m7amad_7ader',
        image:'images/usersImages/m7mad.jpeg',
        email:'m7mad7ader@gmail.com',
        coursesEnroll:[
            {
                courseId:'1'
            },
            {
                courseId:'2'
            },
            {
                courseId:'10'
            },
            {
                courseId:'12'
            },
            {
                courseId:'7'
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
                courseId:'14'
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
export function addCourses(courseId){
    users.forEach((user)=>{
        if (user.id==IdOfUserOnSite){
            user.coursesEnroll.forEach((course)=>{
                if(course.courseId==courseId){
                    console.log('already exist');
                }else{
                    user.coursesEnroll.push({"courseId":courseId});
                }
            });
        }
    });
    saveToLocalStorage();
    // console.log(users);
}
function saveToLocalStorage(){
    localStorage.setItem('users',JSON.stringify(users));
}