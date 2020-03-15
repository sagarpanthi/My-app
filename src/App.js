import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
/* Return always return only one thing.
So, <BrowserRouter> is used to wrap. This creates parent element. We can import this from react-router-dom:*/
import Routes from './routes';
import Header from "./common/Header";


class App extends Component {
    constructor(props){
        super(props);
        this.state={isUser:true}
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header isUser={this.state.isUser}/>
                    <Routes isUser={this.state.isUser}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
