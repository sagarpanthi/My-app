/*
import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell"
import Table from "@material-ui/core/Table"
import "./css/login.css";
import {TableRow} from "@material-ui/core";
import ProductCardComponent from "./components/ProductCardComponent";
import {getBookingHistory} from "./api/bookingHistory";

export default class BookingHistory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns: [
                "Name","Surname","DOB","Subject" //this is header title
            ],
            data: [ //this is tables rows data
                /!*{ name: 'Suraj', surname: 'Gautam', dob: 1987, subject: "social" },
                { name: 'Suraj', surname: 'Gautam', dob: 1987, subject: "social" },
                { name: 'Suraj', surname: 'Gautam', dob: 1987, subject: "social" },*!/
            ],

        };
    }
    componentDidMount() {
        getBookingHistory().then(function (data) {
            this.setState({data: data})

        }).catch(function (error) {
        })
    }

    edit(data,index){
     //todo call api to edit/delete wait for response,

        //delete
        this.state.data.splice(index, 1);
        this.setState({data: this.state.data})
        //for edit
        // call api first
        // this.state.data[index] = response.data
    }

    render() {

        return (
            <div >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>

                                <TableCell>Name</TableCell>
                                <TableCell>Surname</TableCell>
                                <TableCell>DOB</TableCell>
                                <TableCell>SUbject</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.data.length ?
                                this.state.data.map(
                                    (data,index) =>
                                        <TableRow>
                                            <TableCell>{data.name}</TableCell>
                                            <TableCell>{data.surname}</TableCell>
                                            <TableCell>{data.dob}</TableCell>
                                            <TableCell>{data.subject}</TableCell>
                                            <TableCell onClick={()=>this.edit(data,index)}>edit</TableCell>
                                        </TableRow>) : <span>No data available</span> }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
*/

import React from "react";
import {getALlBooking, getBookingHistory} from "./api/bookingHistory";
import {TableRow,Table,TableContainer,TableBody,TableCell,TableHead} from "@material-ui/core";

export default class bookingHistory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bookings:null
        };
        this.viewInfo = this.viewInfo.bind(this);
    }

    viewInfo(){
        let self=this;
        getALlBooking().then(function (data) {
            console.log("user data........")
            console.log(data);
            self.setState({bookings:data})
        }).catch(function (err) {
            console.log(err);
        })
    }

    componentDidMount() {
        document.body.style.backgroundColor="whitesmoke";
        this.viewInfo();
    }

    render() {
        return(
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {/* <th>User_Name</th>*/}
                                <th>Booking From</th>
                                <th>Booking To</th>
                                <th>Final Price</th>
                                <th>Product Name</th>
                                <th>Email</th>
                                <th>Action</th>



                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.bookings!== null && this.state.bookings.length ?
                                this.state.bookings.map(
                                    booking =>
                                        <TableRow>
                                            {/*<TableCell>{booking.userName}</TableCell>*/}
                                            <TableCell>{booking.booking_from}</TableCell>
                                            <TableCell>{booking.booking_to}</TableCell>
                                            <TableCell>{booking.final_price}</TableCell>
                                            <TableCell>{booking.productName}</TableCell>
                                            <TableCell>{booking.userName}</TableCell>
                                            <TableCell>{booking.status === "OPEN" ?
                                                <span>
                                            <span>Confirmed</span>  |   <span>Delete</span>
                                        </span> : <span>Delete</span>}</TableCell>
                                        </TableRow>
                                ) : <span>no data</span>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}