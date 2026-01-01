import { courses } from "./courses.js";
import { IdOfUserOnSite, users } from "./Users.js";

const MainTable=document.querySelector('.main-table');

const userImageElement=document.querySelector('#userImage');
const UserNameElement=document.querySelector('.username');
const joinBtnElement=document.querySelectorAll('.joinBtn');

let html=``;
let TdHtml=``;

uploudUserinfo();

GenerateHtmlForIndex();

function AddLine(){
    html+=`
    <tr>
    <td colspan="5" class="spacing"></td>
    </tr>
    <tr>
        ${TdHtml}
    </tr>
    `;
    TdHtml=``;
}

function GenerateHtmlForIndex(){
    courses.forEach((course,index,list)=>{
    if ((index!=0)&&(index%5==0)){
        AddLine(TdHtml);
        TdHtml=``;
    }
    if (index <= list.length-1){
    TdHtml+=`
        <td>
            <div class="course-contener">
                <br>
                <img src="${course.image}" loading="lazy" alt="">
                <p class ="course-description">${course.description}</p>
                <br>
                <button class="joinBtn "data-id="${course.courseId}">Join now </button>
            </div>
        </td>
    `;

    if (index==courses.length-1){
        AddLine(TdHtml);
        TdHtml=``;
        }
    }
    });

    MainTable.innerHTML += html;
}
function uploudUserinfo(){
    users.forEach((user)=>{
    if (IdOfUserOnSite==user.id){
        UserNameElement.textContent=user.username;
        if (user.image){
        userImageElement.setAttribute('src',user.image);
        }
    }

});
}