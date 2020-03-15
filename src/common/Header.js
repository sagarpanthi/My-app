import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import {Link, withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import MobileHeader from './MobileHeader';
import menuLists from './menuList';
import {getUser} from "../utils/config";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            userName:'',
            userImg:'',
            currentRoute:this.props.location,
            user:getUser()
        };
    }

    /*componentWillMount runs if any component is deleted. It is often used to cancel request got from backend.  It is used to cancel the ajax request*/
    componentWillMount() {
        let self=this;
        this.unlisten = this.props.history.listen((location, action) => {
            self.setState({currentRoute:location.pathname});
        });
    }

    handleMenu = event => {
        if(/*isLogin.isLogin()*/ false) {
            this.setState({anchorEl: event.currentTarget});
        }else {
            window.location.href='/login?url='+window.location.href;
        }
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
        this.handleLogout();
    };
    handleLogout=()=>{
        let self=this;

    };
    changeRoute=(path)=>{
        this.setState({currentRoute:path})

    };
    logout(){
        //clear session and redirect to login page
        sessionStorage.removeItem("user");
        window.location.href = "/login"
        //routing.redirect("/login")
    }



    render() {
        const open = Boolean(this.state.anchorEl); /*anchorEl is the DOM element, or a function that returns the DOM element, that may be used to set the position of the popover.*/
        return (
            <div>
                <MobileHeader location={this.state.currentRoute} changeRoute={this.changeRoute} isUser={this.props.isUser}/>
                <div style={{background: '#efefef'}} className="hideHeaderDesktop">
                    <Grid container spacing={24} style={{width: '100%'}}>
                        <Grid item xs={12} sm={1} style={{paddingBottom: 0}}></Grid>
                        <Grid item xs={12} sm={10} style={{paddingBottom: 0}}>
                            <Toolbar variant="dense">
                                <Grid container spacing={24} style={{width: '100%'}}>
                                    <Grid item xs={3} sm={3}>
                                        <img src={""} className="appLogo"/>
                                        <spam className="headerTitle"><b>Motorbike Rental</b></spam>
                                    </Grid>
                                    <Grid item xs={9} sm={9}>
                                        <div className="menuWrapper">
                                            {menuLists(this.state.user).headerMenu.map(
                                                (menu) =>
                                                    <Link to={menu.path}
                                                          onClick={() => this.changeRoute(menu.path)}>
                                                               <span
                                                                   style={{color: this.state.currentRoute == menu.path ? '#b71c1c' : '#1e1e1e'}}
                                                                   className="menulist">{menu.name}</span>
                                                    </Link>
                                            )}
                                            {
                                                this.state.user === "user" || this.state.user == "admin"?
                                                    <button  style={{color:"black",backgroundColor:"#FED250"}} onClick={this.logout}>Logout</button>
                                                    //<Link onClick={this.logout}>Logout</Link>
                                                    :null
                                            }

                                            <IconButton
                                                style={{position: 'absolute', right: 10, top: -2}}
                                                aria-owns={open ? 'menu-appbar' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.handleMenu}
                                                color="inherit"
                                            >
                                                {this.state.userImg == '' ?
                                                    <AccountCircle style={{fontSize: 36}}/> :
                                                    <Avatar alt={this.state.userName}
                                                            src={this.state.userImg}
                                                            className="userImage"/>}
                                            </IconButton>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={this.state.anchorEl}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={open}
                                                onClose={this.handleClose}
                                            >
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </Menu>
                                        </div>


                                    </Grid>
                                </Grid>


                            </Toolbar>
                        </Grid>
                        <Grid item xs={12} sm={1} style={{paddingBottom: 0}}></Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default withRouter(Header); //This gives the Header component access to this.props.history, which means the header can now redirect the user.
