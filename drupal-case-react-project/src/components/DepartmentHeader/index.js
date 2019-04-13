import React from 'react';
import { Container, Col, Row } from '../Grid';
import './style.css';

function DepartmentHeader(props) {
    return (
        <div className="jumbotron jumbotron-fluid custom-margin dept-container d-flex align-items-center">
            <Container>
                <Row>
                    <Col size={'md-9'}>
                        <h1 className="dept-head">{props.children}</h1>
                    </Col>
                    <Col size={'md-3'}>
                        <div className="input-group mb-3 search-div">
                            <input type="text" 
                            className="form-control input-search" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            placeholder="Search..." />
                        </div>
                        <div className="search-glass">
                            <i className="fas fa-search magnifying-glass"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DepartmentHeader;