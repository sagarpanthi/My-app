import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import menuLists from './menuList';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from "react-router-dom";
import {SwipeableDrawer} from "@material-ui/core";

class MobileHeader extends Component {

    toggleDrawer = event => {
        this.setState({open: !this.state.open});
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userName: '',
            userImg: '',
        };
    }


    render() {
        return (
            <div className="hideHeaderMobile">
                <div style={{background:'#ffffff'}}>
                    <MenuIcon onClick={this.toggleDrawer} style={{margin:10}}/>
                    <span style={{fontSize:14,fontWeight:600,margin:10,color:'#b71c1c',fontFamily:'Poppins'}}>Booking Application</span>
                </div>
                <SwipeableDrawer anchor="left" open={this.state.open} onClose={this.toggleDrawer} style={{width: '100px'}}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        <div >
                            <div style={{margin: '20px 20px 20px 20px'}}>
                                <Avatar src={this.state.userImg} style={{margin: '0 auto', display: 'block'}}/>
                                <div style={{marginTop: 20}}>{this.state.userName}</div>
                            </div>
                            <Divider/>
                            <div style={{margin: '10px 20px 0px 20px',}}>
                                <List>
                                    {menuLists(this.props.isUser).headerMenu.map((text, index) => (
                                        <Link to={text.path} onClick={()=>this.props.changeRoute(text.path)}>
                                            <ListItem button key={index}>
                                                <ListItemText primary={<span
                                                    style={{color: this.props.location == text.path ? '#b71c1c' : '#1e1e1e'}}  className="menulistMobile">{text.name}</span>}/>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </div>

                        </div>
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default MobileHeader;
