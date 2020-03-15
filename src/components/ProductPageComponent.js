import React from "react"
import "../css/login.css";
import {getProduct, createProductOnRegister, deleteMyProduct, register_product} from "./../api/product";
import ProductCardComponent from "./../components/ProductCardComponent";
import product from "./../product";
import BookingHistory from "./../bookingHistory";
import {getUser, getUserId} from "../utils/config";
import {Button, Row} from "react-bootstrap";

export default class ProductPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetailList: [],
            productId:"",
            productName:"",
            name:"",
            imageUrl:"",
            description:"",
            price:"",
            loggedIn:getUserId(),
            userStatus:getUser(),

        };
        this.callProductDetails = this.callProductDetails.bind(this);
        this.hitProduct = this.hitProduct.bind(this);
        this.onProductRegister = this.onProductRegister.bind(this);
        this.registerproducts = this.registerproducts.bind(this);
       // this.deleteProduct=this.deleteProduct.bind(this);
    }

    componentDidMount() {
        this.callProductDetails();
    }

    callProductDetails() {
        let self = this;
        getProduct().then(function(data) {
            self.setState({productDetailList: data})
        }).catch(function (err) {

        })
    }

    hitProduct(event){
        this.state.productId=event._id;
        this.state.productName=event.name;
        console.log(this.state.productId);
        console.log(this.state.productName);

        if (this.state.loggedIn){
            if (this.state.userStatus==="user") {
                this.props.history.push('/MakeBooking/' + this.state.productId + '/' + this.state.productName);
            }
        }else{
            this.props.history.push('/login');
        }

    }
    registerproducts(name,imageUrl,description,price){
        let self = this;
        if (name && name !== "" && imageUrl && imageUrl!==""&& description && description!==""&& price && price!==""){
            createProductOnRegister(name,imageUrl,description,price).then(function (data) {
                //self.setState({registerSuccesful:true});
                self.callProductDetails();
                console.log(data);
                /* self.props.history.push("/MyBikes");*/
            }).catch(function (error) {
                self.setState({registerSuccesful:false, errorMessage:error});
            })
        }
    }

    handleChange(event){
        const name = event.target.name;
        this.setState({[name]:event.target.value});
    }
    onProductRegister(){
        this.registerproducts(
            this.state.name,
            this.state.imageUrl,
            this.state.description,
            this.state.price,
        );
    }

   /* deleteProduct(event){
        let self=this;
        deleteMyProduct(event._id).then(function (data) {
            console.log(data);
            self.callProductDetails();
        }).catch(function (err) {
            console.log(err);
        })
    }*/


    render() {
        console.log("calling render");
        console.log(this.state.productDetailList);
        console.log(this.state.userStatus);
        return (
            <div>
                <br/>
                <div className="row">
                    {this.state.productDetailList.length ?
                        this.state.productDetailList.map(
                            (product) =>
                                <div className={"col-sm-3"}>
                                    <ProductCardComponent
                                        name={product.name}
                                        image={product.imageUrl}
                                        price={product.price}
                                        description={product.description}
                                        triggerProductPage={(event)=>this.getProductId(product)}
                                       // triggerdeleteproduct={(event)=>this.deleteProduct(product)}
                                        hitThisProduct={(event)=>this.hitProduct(product)}
                                    />
                                </div>
                        ) : <span>no data</span>}
                </div>
            </div>

        )
    }
}



