import React from "react";
import BlogCard from "./blogCard";

export default class Blog extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
             <div>
                 <BlogCard imageUrl={"http://localhost:3000/61973b03b674d6a87172f4535240382d-lumbini.jpg"} body={"Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of\n" +
                 "                        Province No. 5 in Nepal. It is the place where, according to\n" +
                 "                        Buddhist tradition, Queen Mahamayadevi gave birth to Siddhartha\n" +
                 "                        Gautama in 563 BCE. Gautama, who achieved Enlightenment some time\n" +
                 "                        around 528 BCE, became the Buddha and founded Buddhism."} title={"Card Title"}/>
                 <BlogCard imageUrl={"http://localhost:3000/61973b03b674d6a87172f4535240382d-lumbini.jpg"} body={"Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of\n" +
                 "                        Province No. 5 in Nepal. It is the place where, according to\n" +
                 "                        Buddhist tradition, Queen Mahamayadevi gave birth to Siddhartha\n" +
                 "                        Gautama in 563 BCE. Gautama, who achieved Enlightenment some time\n" +
                 "                        around 528 BCE, became the Buddha and founded Buddhism."} title={"Card Title"}/>
                 <BlogCard imageUrl={"http://localhost:3000/61973b03b674d6a87172f4535240382d-lumbini.jpg"} body={"Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of\n" +
                 "                        Province No. 5 in Nepal. It is the place where, according to\n" +
                 "                        Buddhist tradition, Queen Mahamayadevi gave birth to Siddhartha\n" +
                 "                        Gautama in 563 BCE. Gautama, who achieved Enlightenment some time\n" +
                 "                        around 528 BCE, became the Buddha and founded Buddhism."} title={"Card Title"}/>
             </div>
        )
    }
}