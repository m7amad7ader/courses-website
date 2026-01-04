import { courses } from "./courses.js";
import {uploudUserinfo}from'./Utils.js'
import { addCourses } from "./Users.js";

const MainTable=document.querySelector('.main-table');

const UserImageElement=document.querySelector('#userImage');
const UserNameElement=document.querySelector('.username');

let html=``;
let TdHtml=``;
let courseId;


uploudUserinfo(UserNameElement, UserImageElement);
GenerateHtmlForIndex();
addEventListeners();

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
    courses.forEach((course,index)=>{
    if ((index!=0)&&(index%5==0)){
        AddLine(TdHtml);
        TdHtml=``;
    }
    TdHtml+=`
        <td>
            <div class="course-contener">
                <br>
                <img src="${course.image}" loading="lazy" alt="">
                <p class ="course-description">${course.description}</p>
                <br>
                <button class="joinBtn" data-id="${course.courseId}">Join now </button>
            </div>
        </td>
    `;
    if (index==courses.length-1){
        AddLine(TdHtml);
        TdHtml=``;
        }
    });

    MainTable.innerHTML += html;
}
function addEventListeners(){
    const joinBtnElements=document.querySelectorAll('.joinBtn');
    joinBtnElements.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    courseId =btn.dataset.id;
    // console.log(btn.dataset.id);
    // console.log(btn);
    
    addCourses(courseId);
    });
});
}

