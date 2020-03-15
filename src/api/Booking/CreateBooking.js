import axios from 'axios';
import {BASE_URL} from "../../utils/config";

export function CreateBooking(userId,productId,productName,booking_from,booking_to,status,final_price,marked_price,product_short_description,userName){
    return new Promise((resolve,reject)=>
        {
            console.log("onPromise....");
            axios.post(BASE_URL+"booking",create_booking(userId,productId,productName,booking_from,booking_to,status,final_price,marked_price,product_short_description,userName)).then(
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

function create_booking(userId,productId,productName,booking_from,booking_to,status,final_price,marked_price,product_short_description,userName) {
    return{
        userId:userId,

        productId:productId,
        productName:productName,
        booking_from:booking_from,
        booking_to:booking_to,
        status:status,
        final_price:final_price,
        marked_price:marked_price,
        product_short_description: product_short_description,
        userName: userName,
    }
}

export function changePassword(){

}
export function getAvailableTime(timeObject) {
    return new Promise((resolve,reject)=>
        {
            axios.post(BASE_URL+"availableTime",timeObject).then(
                function (data) {
                    console.log(data);
                    if(data.data.status === true){
                        resolve(data.data.data);
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
export function createAvialableTimeObject(packageId,date) {
    let fromDateTimeStamp  = date.getTime();
    let toDate = new Date(date);
    toDate.setDate(date.getDate());
    let toDateTimeStamp = toDate.getTime();
    return {
        packageId: packageId,
        booking_from: fromDateTimeStamp,
        booking_to:toDateTimeStamp
    }
}
