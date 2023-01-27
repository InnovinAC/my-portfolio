import Navbar from "./includes/Navbar";
import React, {useState} from "react"

import Card from "./Card";
import Container from "./Container";
import Footer from "./includes/Footer";

export default function Layout(props){
    

        return (
            <div>
            <Navbar />
    <Container>
        {props.children}

        
    </Container>
    <Footer />
            </div>
        )
    }
