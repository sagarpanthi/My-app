/*
import axios from "axios";
import {BASE_URL} from "../utils/config";

export function getBookingHistory() {
    return new Promise((resolve,reject)=>
        {
            let data = sessionStorage.getItem("user");
            if(data!=null) {
                let user = JSON.parse(data)
                axios.get(BASE_URL + "myBooking/" + user.userId).then(
                    function (data) {
                        console.log(data.data)
                        if (data.status === true) {
                            resolve(data.data);
                        } else {
                            reject(data.message);
                        }
                    }
                ).catch(function (error) {
                    reject(error);
                });
            }
        }
    )
}*/


import axios from "axios";
import {BASE_URL} from "../utils/config";





export function getBookingHistory() {
    return new Promise((resolve,reject)=>
        {
            let data = sessionStorage.getItem("user");
            if(data!=null) {
                let user = JSON.parse(data);
                console.log(user);
                axios.get(BASE_URL + "users/"+user.userId).then(
                    function (data) {
                        console.log(data.data);
                        if (data.data.status === true) {
                            resolve(data.data.data);
                        } else {
                            reject(data.data.message);
                        }
                    }
                ).catch(function (error) {
                    reject(error);
                });
            }
        }
    )
}

export function getALlBooking() {
    return new Promise((resolve,reject)=>
        {
            axios.get(BASE_URL + "booking").then(
                function (data) {
                    if (data.data.status === true) {
                        resolve(data.data.data);
                    } else {
                        reject(data.message);
                    }

                }
            ).catch(function (error) {
                reject(error);
            });
        }
    )
}

