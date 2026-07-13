import{courses} from'./courses.js'
import{usercourses}from './Users.js'
import{uploudUserinfo}from'./Utils.js'


const dashboardTableElement=document.querySelector('.dashboard-table');
const UserImageElement=document.querySelector('#userImage');
const UserNameElement=document.querySelector('.username');

let html=``;
let TdHtml=``;

uploudUserinfo(UserNameElement,UserImageElement);
GenerateHtmlForDashboard();

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
function GenerateHtmlForDashboard(){
usercourses.forEach((id,index)=>{
    courses.forEach((course)=>{
        if (course.courseId==id){
            if ((index!=0)&&(index%5==0)){
            AddLine(TdHtml);
            TdHtml=``;
            }
            TdHtml+=`
                <td>
                    <div class="course-container">
                        <br>
                        <img src="${course.image}" loading="lazy" alt="">
                        <p class ="course-description">${course.description}</p>
                        <br>
                        <button class="detailsBtn">details </button>
                    </div>
                </td>
            `;
            if (index==usercourses.length-1){
                AddLine(TdHtml);
                TdHtml=``;
            }
        }
    });
});
    dashboardTableElement.innerHTML += html;
}

