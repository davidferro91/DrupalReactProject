import React from 'react';
import { Container, Row, Col } from '../Grid';
import './style.css';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer pt-4 pb-0 m-0">
        <Container>
          <Row>
            <Col size={"sm-12 md-4"}>
              <img src={require("./images/cwru.png")} alt="CWRU Logo" className="footer-logo mb-2" />
              <p>© 2019 <a className="link" href="https://case.edu/"><b>Case Western Reserve University</b></a></p>
              <p>10900 Euclid Ave. Cleveland, Ohio 44106</p>
              <p>216.368.2000</p>
              <p><a className="link" href="https://case.edu/utech/departments/information-security/policies/legal-privacy-notice"><b>Legal Notice</b></a> | <a className="link" href="https://case.edu/privacy-statement/index.html"><b>Privacy Policy</b></a></p>
            </Col>
            <Col size={"md-1"}></Col>
            <Col size={"sm-12 md-4"}>
              <h3><i className="fas fa-map-marker-alt fa-2x p-0 m-0 d-none d-md-block"></i>OFFICE OF RESEARCH AND TECHNOLOGY MANAGEMENT</h3>
              <p><b>Campus Location:</b><br />
                Nord Hall, Suite 615<br />
                2095 Martin Luther King Jr. Dr.<br />
                Cleveland, OH 44106</p>

              <p><b>Mailing Address:</b><br />
                10900 Euclid Ave.<br />
                Cleveland, OH 44106-7015</p>

              <p><b>Phone: </b><a className="link" href="tel:216.368.4510"><b>216.368.4510</b></a></p>

              <p><b>Email: </b><a className="link" href="mailto:resadm@case.edu"><b>resadm@case.edu</b></a></p>

              <p><a className="link" href="mailto:steve.reinhardt@case.edu"><b>Site Feedback</b></a></p>
            </Col>
            <Col size={"md-1"}></Col>
            <Col size={"sm-12 md-2"}>
              <h3>CWRU LINKS</h3>
              <p><a className="link" href="https://case.edu/admissions/"><b>Apply to CWRU</b></a><br />
              <a className="link" href="https://securelb.imodules.com/s/1526/gid1/interior-2col.aspx?sid=1526&gid=1&pgid=327&cid=914"><b>Give Now</b></a><br />
              <a className="link" href="https://case.edu/visit/"><b>Visit Campus</b></a><br />
              <a className="link" href="https://webapps.case.edu/directory/"><b>University Directory</b></a></p>
            </Col>
          </Row>
        </Container>
      </footer>


    );
  }
}

export default Footer;