import axios from "axios";
import {BASE_URL} from "../utils/config";

export function getProduct(){
    return new Promise((resolve,reject)=>
        {
            axios.get(BASE_URL+"product").then(
                function (data) {
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

export function createProductOnRegister(name,imageUrl,description,price) {
    return new Promise((resolve,reject)=>{
        axios.post(BASE_URL+"product",register_product(name,imageUrl,description,price)).then(
            function (data) {
                if (data.data.status === true){
                    resolve(data.data.message);
                }else{
                    reject(data.data.message);
                }
            }
        ).catch(function (error) {
            reject(error);
        });
    })
}



function register_product(name,imageUrl,description,price) {
    return {
        name: name,
        imageUrl:imageUrl,
        description:description,
        price:price
    }
}

export function deleteMyProduct(product_id) {
    return new Promise((resolve,reject)=>{
        axios.post(BASE_URL+"product/"+product_id).then(
            function (data) {
                if (data.data.status===true){
                    resolve(data.data.message);
                }else{
                    reject(data.data.message);
                    console.log(data.data.status);
                }
            }
        ).catch(function (error) {
            reject(error);
        })
    })
}

export function editProduct(product_id,name,imageUrl,description,price) {
    return new Promise((resolve,reject)=>{
        axios.post(BASE_URL+"product/update/"+product_id,register_product(name,imageUrl,description,price)).then(
            function (data) {
                if (data.data.status === true){
                    resolve(data.data.message);
                }else{
                    reject(data.data.message);
                }
            }
        ).catch(function (error) {
            reject(error);
        });
    });
}
