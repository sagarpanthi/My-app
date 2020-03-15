import React from "react";
import axios from 'axios';
import {login, register, register_user} from "./api/user";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
//import  "./utils/css/login.css";
import Avatar from "@material-ui/core/Avatar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            gender: "",
            phone: "",
            email: "",
            isRegisterSuccessfull: false,
            errorMsg: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.onsubmit = this.onsubmit.bind(this);
        //this.notify = this.notify.bind(this);

    }

    /*    doRegister(username,password,gender,phone,email){
            let self=this;
            if(username &&)
        }*/


    handleChange(event) {
        /*var name = event.target.name*/
        this.setState({[event.target.name]: event.target.value})
    }

    onsubmit() {
        let user = register_user(this.state.username, this.state.password, this.state.gender, this.state.phone, this.state.email);
        register(user).then(function (da) {
            this.notify()
        }).catch(function (err) {

        });
    }
    //notify = () => toast("Registered Successfully !");

    render() {
        if (this.state.isRegisterSuccessfull === true) {
            return (<div></div>)
        } else {
            return (
                <div className="card w-50 mx-auto mt-5">
                    <div
                        className="card-header"
                        style={{backgroundColor: "#FED250", color: "black"}}
                    >
                        <h1>Sign Up</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="UserName">UserName</label>
                            <input
                                type="text"
                                name="username" required
                                placeholder="UserName"
                                className="form-control"
                                value={this.state.username}
                                onChange={(evnet) => this.handleChange(evnet)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder="Email" name="email" required className="form-control"
                                   value={this.state.email}
                                   onChange={(evnet) => this.handleChange(evnet)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" name="password" required className="form-control"
                                   value={this.state.password}
                                   onChange={(evnet) => this.handleChange(evnet)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <input type="text" placeholder="Gender" name="gender" required className="form-control"
                                   value={this.state.gender}
                                   onChange={(evnet) => this.handleChange(evnet)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" placeholder="Phone" name="phone" required className="form-control"
                                   value={this.state.phone}
                                   onChange={(evnet) => this.handleChange(evnet)}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block"  onClick={this.onsubmit} value="regsiter">
                            Register
                        </button>
                    </form>
                </div>



                /*<div className={"login-root-div"}>
                    <Card className={"login-card"}>
                        < form className={"row"}>
                            <Avatar sizes={50}>
                                SP
                            </Avatar>

                            <TextField type="text" label="UserName" name="username" value={this.state.username}
                                       onChange={(evnet) => this.handleChange(evnet)}/>
                            <div>
                                <TextField type="text" label="Email" name="email" value={this.state.email}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>
                            <div>
                                <TextField type="password" label="Password" name="password" value={this.state.password}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>
                            <div>
                                <TextField type="text" label="gender" name="gender" value={this.state.gender}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>
                            <div>
                                <TextField type="text" label="phone" name="phone" value={this.state.phone}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>



                            <div style={{marginTop: 20}}>
                                <Button style={{backgroundColor: "#00ff00"}} color="primary" value="regsiter"
                                        onClick={this.onsubmit}>Register</Button>
                            </div>

                        </form>
                    </Card>
                </div>*/
            )
        }
    }


}
