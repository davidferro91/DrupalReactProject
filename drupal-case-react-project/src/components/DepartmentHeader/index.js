import React from 'react';
import { Container, Col, Row } from '../Grid';
import './style.css';

function DepartmentHeader(props) {
    return (
        <div className="jumbotron jumbotron-fluid custom-margin">
            <Container>
                <Row>
                    <Col size={'md-9'}>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Col>
                    <Col size={'md-3'}>
                        <div className="input-group mb-3 search-bar">
                            <i class="fas fa-search magnifying-glass"></i>
                            <input type="text" 
                            class="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-default" 
                            placeholder="Search..." />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DepartmentHeader;