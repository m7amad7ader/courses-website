import { IdOfUserOnSite, users } from "./Users.js";

export function uploudUserinfo(UserNameElement,UserImageElement){
    users.forEach((user)=>{
    if (IdOfUserOnSite==user.id){
        UserNameElement.textContent=user.username;
        if (user.image){
        UserImageElement.setAttribute('src',user.image);
        }
    }

});
}
