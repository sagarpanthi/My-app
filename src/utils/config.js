export const BASE_URL="http://localhost:8082/api/";

export function getUser() {
    let user = sessionStorage.getItem("user");
    if (user != null){
        return JSON.parse(user).role;
    }else{
        return "guest";
    }
}

export function getUserId() {
    let user = sessionStorage.getItem("user");
    if (user != null){
        return JSON.parse(user).userId
    }else {
        return null
    }
}

export function getUserName() {
    let userName = sessionStorage.getItem("user");
    if (userName != null){
        return JSON.parse(userName).username
    }else {
        return null
    }
}
