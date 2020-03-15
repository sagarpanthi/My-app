import React from "react";
import "../css/login.css";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "react-bootstrap/Card";
import { spacing } from '@material-ui/system';

export default class ProductCardAdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Card style={{ width: '25rem', marginTop:50, marginLeft:50 }} >
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.price}
                            <br/>
                            {this.props.description}
                        </Card.Text>
                        <Button style={{color:"black",backgroundColor:"#FED250",borderColor:"#B32121", marginTop:5, marginRight:80}} variant="primary" onClick={(event => this.props.editProduct())}>Edit</Button>
                        {/*<Box paddingTop={1} />*/}
                        <Button style={{color:"black",backgroundColor:"#FED250",borderColor:"#B32121", marginTop:5}} onClick={(event)=>this.props.triggerdeleteproduct()}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>

        )


        /*return (
            <div className="login-root-div">
                <card className={"login-card"}>
                    <CardHeader
                        title={this.props.name}
                        subheader={this.props.price}
                    />
                    <CardMedia
                        image= {this.props.image}
                        height="100"
                        component="img"
                    />
                </card>
            </div>
        )*/

    }
}
