import React from "react"
import "../css/login.css";
import {getProduct, createProductOnRegister, deleteMyProduct, register_product, editProduct} from "./../api/product";
import ProductCardAdminComponent from "./../components/ProductCardAdminComponent";
import product from "./../product";
import BookingHistory from "./../bookingHistory";
import {getUser, getUserId} from "../utils/config";
import {Button, Row} from "react-bootstrap";


export default class ProductPageAdminComponent extends React.Component {
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
            state:'ADD'

        };
        this.callProductDetails = this.callProductDetails.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.onProductRegister = this.onProductRegister.bind(this);
        this.registerproducts = this.registerproducts.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
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

    editProduct(event){
      /*  let self=this;
        editProduct(event._id).then(function (data) {
            console.log(data);
            self.callProductDetails();
        }).catch(function (err) {
            console.log(err);
        })*/

      console.log('event is ', event)

        /*
        * todo this.state.name = event.name
        *  this.state.state = 'UPDATE';
        *
        *
        * */

        this.setState({productId:event._id,name:event.name,state:'UPDATE',imageUrl:event.imageUrl,description:event.description,price:event.price})

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

    updateProduct(name,imageUrl,description,price){
        let self = this;
        if (name && name !== "" && imageUrl && imageUrl!==""&& description && description!==""&& price && price!==""){
            editProduct(self.state.productId, name,imageUrl,description,price).then(function (data) {
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
        if(this.state.state === "ADD") {
            this.registerproducts(
                this.state.name,
                this.state.imageUrl,
                this.state.description,
                this.state.price,
            );
        }else{
            this.updateProduct(this.state.name,
                this.state.imageUrl,
                this.state.description,
                this.state.price)
        }
        this.setState({name:'',imageUrl:'',description:'',price:''})
    }

    deleteProduct(event){
        let self=this;
        deleteMyProduct(event._id).then(function (data) {
            console.log(data);
            self.callProductDetails();
        }).catch(function (err) {
            console.log(err);
        })
    }


    render() {
        console.log("calling render");
        console.log(this.state.productDetailList);
        console.log(this.state.userStatus);
        return (
            <div>
                    <div>
                        <form className={"ml-4"}>
                            <Row>
                                <label htmlFor="name">name</label>
                                <input type="text" name="name" placeholder="name" value={this.state.name}
                                       onChange={(event) => this.handleChange(event)}/>
                            </Row>
                            <br/>
                            <Row>
                                <label htmlFor="imageUrl">imageUrl</label>
                                <input type="text" name="imageUrl" placeholder="imageUrl" value={this.state.imageUrl}
                                       onChange={(event) => this.handleChange(event)}/>
                            </Row>
                            <br/>
                            <Row>
                                <label htmlFor="description">description</label>
                                <input type="text" name="description" placeholder="description" value={this.state.description}
                                       onChange={(event) => this.handleChange(event)}/>
                            </Row>
                            <br/>
                            <Row>
                                <label htmlFor="price">price</label>
                                <input type="text" name="price" placeholder="price" value={this.state.price}
                                       onChange={(event) => this.handleChange(event)}/>
                            </Row>
                            <br/>

                            <Row>
                                <Button onClick={this.onProductRegister}>{this.state.state === 'ADD' ? 'Add product' : 'Update Product' }</Button>
                            </Row>
                        </form>
                    </div>
                <br/>
                <div className="row">
                    {this.state.productDetailList.length ?
                        this.state.productDetailList.map(
                            (product) =>
                                <div className={"col-sm-3"}>
                                    <ProductCardAdminComponent
                                        name={product.name}
                                        image={product.imageUrl}
                                        price={product.price}
                                        description={product.description}
                                        triggerProductPage={(event)=>this.getProductId(product)}
                                        triggerdeleteproduct={(event)=>this.deleteProduct(product)}
                                        editProduct={(event)=>this.editProduct(product)}
                                    />
                                </div>
                        ) : <span>no data</span>}
                </div>
            </div>

        )
    }
}



