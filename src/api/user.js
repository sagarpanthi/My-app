import axios from 'axios';
import {BASE_URL} from "../utils/config";
export function login(username,password) {
    return new Promise ((resolve,reject)=>{
        axios.post(BASE_URL+"login",create_user_object(username,password)).then(
            function (data){
                console.log("data value ....");
                console.log(data);
                console.log(data.data);
                if(data.data.status === true){
                    resolve(data.data.user)
                }else{
                    reject(data.data.message)
                }
            }
        ).catch(function (error) {
            console.log(error);
            reject(error)
        });
    })
}
function create_user_object(username,password){
    return{
        email:username,
        password:password,
        role:"user"
    }
}
/*export function register() {
    
}*/
export function change_password() {

}
export function register(user){
    return new Promise((resolve,reject)=>
        {
            axios.post(BASE_URL+"users",user).then(
                function (data) {
                    if(data.data.status === true){
                        resolve(data.data.message);
                    }else{
                        reject(data.data.message);
                    }
                }
            ).catch(function (error) {
                reject(error);
            });
        }
    )
}

export function register_user(username,password,gender,phone,email) {
    return{
        name:username,
        password:password,
        gender:gender,
        phone:phone,
        email:email,
        role: "user",
        imageUrl: ""
    }
}