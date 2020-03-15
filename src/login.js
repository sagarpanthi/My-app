import React from "react";
//import axios from 'axios';
import {login} from "./api/user"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "./css/login.css";
import Avatar from "@material-ui/core/Avatar";
/*import {routing} from "./index"*/
import "bootstrap/dist/css/bootstrap.min.css"
import Checkbox from "@material-ui/core/Checkbox";

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            role:"",
            gender:"",
            phoneNo:"",
            loginSucessfull: false,
            errorMessage:""
        };
        //this.state ={productDetailList:[]}
        //this.callProductDetails=this.callProductDetails.bind(this)
        this.login=this.login.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.handelOnPasswordChange=this.handelOnPasswordChange.bind(this);
        this.handelOnUserNameChange=this.handelOnUserNameChange.bind(this);
    }
    componentDidMount() {
        //this.login("sagarpanthi123@gmail.com", "1234")
        //this.callProductDetails()

    }
    /*    callProductDetails(){
            let self = this;
            axios.get("http://localhost:3000/api/product",{
                headers:{
                    "Content-Type" :"application/x-www-form-urlencoded"
                }
            })
                .then(function (response) {
                    //if(response.status == "success" && response.data){
                    console.log("getting response........");
                    console.log(response.data);
                    self.state.productDetailList = response.data.data;
                    console.log(self.state.productDetailList)
                    self.setState({productDetailList:self.state.productDetailList})
                    console.log(self.state.productDetailList)

                    // }
                }).catch(function (err) {
                console.log(err)
            });

        }*/

    login(username,password){
        let self = this;
        if (username && username != null && username !=="" && password && password != null && password!==""){
            console.log("username.... " + username + " "+ password);
            login(username, password).then(function (data) {
                console.log(data);
                if(data != null && (data.userId != null || data.userId != "")) {
                    console.log(data);
                    let encriptedPassword = btoa(password);
                    sessionStorage.setItem("user", JSON.stringify({
                        userId: data._id,
                        username: username,
                        password: encriptedPassword,
                        role: data.role
                    }));
                    //Todo store username and password in session.
                    //while storing password encode password on base64

                    //self.setState({loginSucessfull: true})
                    // self.props.history.push("/")
                    window.location.href = "/"

                }else{
                    console.log("hello..........")
                    self.setState({loginSucessfull: false})
                    console.log("login unsucessfull.......")

                }

            }).catch(function (error) {
                console.log("on error.....")
                console.log(error);
                self.setState({loginSucessfull:false, errorMessage: error})
            })

        }
    }

    //todo this method should be replaced when we implement logout
    logout(){
        //clear session and redirect to login page
        sessionStorage.removeItem("user");
        window.location.href = "/login"
        //routing.redirect("/login")
    }

    handelOnUserNameChange(event){
        this.setState({username:event.target.value})
    }

    handelOnPasswordChange(event){
        this.setState({password:event.target.value})
    }

    onSubmit(){
        //let username=document.getElementsByName("email")[0].value;
        /* console.log(document.getElementsByName("email")[0].value);
         let password=document.getElementsByName("password")[0].value;*/
        this.login(this.state.username,this.state.password);

    }

    /*
        render() {
            console.log("calling render");
            console.log(this.state.productDetailList);
            return(
                this.state.productDetailList.length?
                    this.state.productDetailList.map(
                        (product)=>
                            <div>
                                <h1>{product.name}</h1>
                                <p>{product.Description}</p>


                            </div>


                    ):<span>no data</span>)
        }*/
    /*render() {
        return(
            <div>
                <h2>Log In</h2>
                Email: <input type="text" name="email"/>
                Password: <input type="password" name="password"/>
                <input type="submit" value="login" onClick={this.onSubmit}/>
            </div>
        )
    }*/

    render() {
        console.log(this.state);
        if(this.state.loginSucessfull === true){
            return (<span>Login successfull ...... </span>)
        }else {
            return (
                <div className="card w-50 mx-auto mt-5">
                    <div
                        className="card-header"
                        style={{ backgroundColor: "#FED250", color: "black" }}
                    >
                        <h1>Login Form</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Email" className="form-control" onChange={(evnet) => this.handelOnUserNameChange(evnet)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={(evnet) => this.handelOnPasswordChange(evnet)}
                        />
                    </div>
                   {/* <Checkbox
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />*/}

                    <button className="btn btn-primary btn-block" onClick={this.onSubmit}>
                        Login
                    </button>
                    {this.state.errorMessage !== ""?
                        <div>{this.state.errorMessage}</div>  : null
                    }
                </div>

                /*<div className="login-root-div" >
                    <card className={"login-card"} >
                        <form className={"row"}>
                            {/!*<Avatar sizes={50}
                                    src={"https://content-static.upwork.com/blog/uploads/sites/3/2018/08/30134548/Canva.png"}>
                            </Avatar>*!/}
                            <TextField className={"col-sm-12"} type="text" label="Email" name="username"
                                       value={this.state.username}
                                       onChange={(evnet) => this.handelOnUserNameChange(evnet)}/>
                            <TextField style={{display: "flex"}} className={"col-sm-12"} type="password"
                                       label="Password" name="password"
                                       onChange={(evnet) => this.handelOnPasswordChange(evnet)}/>
                            <div style={{marginTop: 20}}>
                                <Button style={{backgroundColor: "#00ff00"}} color="primary" value="Login"
                                        onClick={this.onSubmit}>Login</Button>
                            </div>
                        </form>
                        {this.state.errorMessage !== ""?
                            <div>{this.state.errorMessage}</div>  : null
                        }
                    </card>
                </div>*/

            )
        }
    }
}
