import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./login";
import ProductPageComponent from "./components/ProductPageComponent"
import Register from "./signup";
import Blog from "./components/blog";
import {getUser, getUserId} from "./utils/config";
import MakeBooking from "./components/MakeBooking";
import bookingHistory from "./bookingHistory";
import ProductPageAdminComponent from "./components/ProductPageAdminComponent";


/*
*
* this.props.history.push(path, {'key': value)})
*
* */

/*
*
* this.props.history.push(path, {'key': value)})
*
* */


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:getUserId(),
            isUser:getUser()
        }
    }
    componentDidMount() {
        let self=this;
        if(JSON.parse(localStorage.getItem('user_info'))) {
            self.setState({login:true});
        }
    }


    render() {
        return (
            /*component center */
            <div className={""}>
                {this.state.login ?
                    this.state.isUser==="user"?
                        <Switch>
                            <Route path="/" component={ProductPageComponent} exact/>
                            <Route path="/product" component={ProductPageComponent} exact/>
                            <Route path="/makebooking/:productId?/:productName?" component={MakeBooking} exact/>
                            <Route path="/blogs" component={Blog} exact/>
                            {/*<Route path="/makebooking" component={MakeBooking} exact/>*/}
                        </Switch>

                        :<Switch>
                            <Route path="/" component={ProductPageAdminComponent} exact/>
                            <Route path="/product" component={ProductPageAdminComponent} exact/>
                            <Route path="/bookingHistory" component={bookingHistory}  exact/>
                        </Switch>

                    :<Switch>
                        {/*<Route path="/" component={PublicHome} exact/>*/}
                        <Route path="/" component={ProductPageComponent} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/product" component={ProductPageComponent} exact/>
                        <Route path="/register" component={Register} exact/>
                        <Route path="/blogs" component={Blog} exact/>
                    </Switch>
                }

            </div>
        );
    }
}

export default Routes;
