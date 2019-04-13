import React, {Component}from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import PageNotfound from '../components/PageNotFound'
import { Container, Col } from '../components/Grid';

class Notfound extends Component {
    render() {
    return (
        <div>
            <LogoTop/>
            <DepartmentHeader>Office of Research and Technology Management</DepartmentHeader>
            <Navbar/>
            <PageNotfound/>
            <Footer/>
        </div>
     
    )    
    }
}

export default Notfound;


