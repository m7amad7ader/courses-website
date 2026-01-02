import{courses} from'../scripts/courses.js'
import{users}from '../scripts/Users.js'
import{uploudUserinfo}from'./Utils.js'


const dashboardTableElement=document.querySelector('.dashboard-table');
const UserImageElement=document.querySelector('#userImage');
const UserNameElement=document.querySelector('.username');

let html=``;
let TdHtml=``;
uploudUserinfo(UserNameElement,UserImageElement);
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
GenerateHtmlForDashboard();
function GenerateHtmlForDashboard(){
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
                <button class="joinBtn "data-id="${course.courseId}">details </button>
            </div>
        </td>
    `;
    if (index==courses.length-1){
        AddLine(TdHtml);
        TdHtml=``;
        }
    });

    dashboardTableElement.innerHTML += html;
}

