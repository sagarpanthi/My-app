import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {createAvialableTimeObject, CreateBooking, getAvailableTime} from "../api/Booking/CreateBooking";
import {parse} from "@babel/core";
import {getUserId, getUserName} from "../utils/config";
import DatePicker from 'react-date-picker';
import {Select} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
//import {config} from "../utils/config"

export default class MakeBooking extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            userId:getUserId(),
            productId:this.props.match.params.productId,
            productName:this.props.match.params.productName,
            final_price:this.props.match.params.price === undefined ? 0 : this.props.match.params.price,
            status:"CONFIRMED",
            booking_from:"",
            booking_to:"",
            bookingSuccessful:false,
            errorMessage:"",
            fromDate: new Date(),
            toDate: new Date(),
            product_short_description: "This is product short description....",
            userName:getUserName(),
            minimumDate:"",
            maximumDate:""
        };
        this.doBooking = this.doBooking.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.checkValidation = this.checkValidation.bind(this);
        this.onChangeToDate = this.onChangeToDate.bind(this);
    }

    doBooking(userId,productId,productName,booking_from,booking_to,status,final_price,marked_price,product_short_description,userName){
        console.log("do booking called......");
        if(this.checkValidation()) {
            let self = this;
            /*if (userId && userId !== "" && productId && productId !== "" && bookingFrom && bookingFrom > 0 && bookingTo && bookingTo > 0 && vehicleId && vehicleId !== "" &&
                vehicleName && vehicleName !== "" && status && status !== "" && productName && productName !== "" && totalPrice && totalPrice !== "" && ServicingId && ServicingId !== ""
                && ServicingName && ServicingName !== "" && isHomePickup !== "" && doorstepWash !== "" && vehicleLocation && vehicleLocation !== "") {*/
            console.log("validation successfull");
            console.log(booking_from + " " + booking_to);
            CreateBooking(this.state.userId,this.state.productId,
                this.state.productName,booking_from,booking_to,
                this.state.status,this.state.final_price,this.state.marked_price,this.state.product_short_description,userName).then(function (data) {
                console.log("data in make booking ");
                console.log(data);
                if (data.status === false) {
                    self.setState({bookingSuccessful: false, errorMessage: data.message})
                } else {
                    self.setState({bookingSuccessful: true});
                }
            }).catch(function (error) {
                self.setState({bookingSuccessful: false, errorMessage: error});
            })
            /*}*/
        }
    }
    checkValidation() {
        if (this.state.userId && this.state.userId !== "") {
            console.log("user validation successful...");
            console.log(this.state.productId);
            if (this.state.productId && this.state.productId !== "") {
                console.log(("package validation successful..."));
                if (this.state.productName && this.state.productName !== "") {
                    console.log("package name validation successful...");
                    console.log(this.state.final_price);
                    if (this.state.final_price === 0) {
                        console.log("total price check successuful");
                        if (this.state.status && this.state.status !== "") {
                            console.log("status check successful...");
                            if (this.state.fromDate && this.state.fromDate !== "") {
                                console.log("booking from check successful...");
                                if (this.state.toDate && this.state.toDate !== "") {
                                    console.log("booking to check successful...");
                                    if (this.state.product_short_description && this.state.product_short_description !== "") {
                                        console.log("product_short_description check successful...");
                                        if (this.state.userName && this.state.userName !== "") {
                                            console.log("product_short_description check successful...");
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

        handleOnChange(event){
            const name = event.target.name;
            this.setState({[name]:event.target.value});
        }
        onSubmit(){
            let fromBooking = this.state.fromDate;
            console.log("dobooking");
            console.log(fromBooking);
            fromBooking.setHours(0, 0,0,0);
            console.log(fromBooking);
            fromBooking = fromBooking.getTime();
            console.log(fromBooking);

            let toBooking = this.state.toDate;
            toBooking.setHours(0, 0,0,0);
            toBooking =toBooking.getTime();

            this.doBooking(
                this.state.userId,
                this.state.productId,
                this.state.productName,
                fromBooking,
                toBooking,
                this.state.status,
                this.state.final_price,
                this.state.marked_price,
                this.state.product_short_description,
                this.state.userName
            );
        }

        componentDidMount() {
            document.body.style.backgroundColor = "whitesmoke";
            //console.log(this.props.match.params.packageID);
        }
        onChange(date){
            let self = this;
            self.setState({fromDate:date});

            self.setState({minimumDate:date});
        }

        onChangeToDate(date){
            let self = this;
            self.setState({toDate:date});
        }

        render() {
            if (this.state.bookingSuccessful === true){
                return(
                    <div>Booked successfully</div>
                )
            }else{
                const maxDate1=new Date();
                maxDate1.setDate(maxDate1.getDate()+30);

                let minDate2 = new Date(this.state.minimumDate);
                minDate2.setDate(minDate2.getDate()+1);

                let maxDate2 = new Date(this.state.minimumDate);
                maxDate2.setDate(maxDate2.getDate()+10);

                return (
                    <div>
                        <Container>
                            <Row className={"header1"}>
                                Let's book a bike
                            </Row>
                            <Row className={"header2"}>
                                Make a Booking
                            </Row>
                            <Row className={"justify-content-md-center"}>
                                <Form className={"onlyForm"}>
                                    <Form.Group controlId="bookingFrom">
                                        <Form.Label className={"formLabel"}> From Date </Form.Label>
                                        <DatePicker
                                            onChange={this.onChange}
                                            value={this.state.fromDate}
                                            clearIcon={null}
                                            minDate={new Date()}
                                            maxDate={maxDate1}
                                        />

                                        <Form.Label className={"formLabel"}> To Date </Form.Label>
                                        <DatePicker
                                            onChange={this.onChangeToDate}
                                            value={this.state.toDate}
                                            clearIcon={null}
                                            minDate={minDate2}
                                            maxDate={maxDate2}
                                        />

                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row className={"buttonRegister"}>
                                <Button variant={"secondary"} value="Booking" onClick={this.onSubmit}>Confirm Booking</Button>
                            </Row>
                            {
                                this.state.errorMessage !== ""?
                                    <div>{this.state.errorMessage}</div>:null
                            }
                        </Container>
                    </div>
                )
            }
        }
    }
