import React from "react";

export default class BlogCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="card w-50 mx-auto mt-5">

                <img class="card-img-top" src={this.props.imageUrl} alt="Card image cap"/>

                {/*<img class="card-img-top" src="../../public/61973b03b674d6a87172f4535240382d-lumbini" alt="Card image cap"/>*/}
                <div
                    className="card-body"
                    style={{ backgroundColor: "#FED250", color: "black" }}
                >
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.body}
                    </p>
                </div>
            </div>
        )
    }
}