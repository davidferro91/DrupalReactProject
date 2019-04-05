import React from 'react';
import { Col } from '../Grid';
import s from './Footer.css';


class Footer extends React.Component {
  render() {
    return (
        <div class="fixed-bottom">
        <style type="text/css"></style>
        <div class="footer">
        
        <img src ={require("./images/cwru.png")} alt = "case" class = "image"/>
        
        <div className={s.container}>
          <Col size={"lg-3"}>
            <div>
            <br>
            </br>
            </div>
            <div>
                <span className={s.text}>© 2017 Case Western Reserve University, 10900 Euclid Ave., Cleveland, Ohio 44106 216.368.2000</span>
               <table className="data">
                <tr>
                  <td className="data"><span className="data">Campus Safety</span></td>
                    <br></br>
                  <td>Libraries</td>
                </tr>
                <tr>
                  <td>Canvas</td>
                  <br></br>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Centers + Institutes</td>
                    <br></br>
                  <td>Parking + Shuttles</td>
                </tr>
                <tr>
                  <td>Directories</td>
                    <br></br>
                  <td>Student Inforamtion System</td>
                </tr>
                <tr>
                  <td>Diversity</td>
                  <br></br>
                  <td>University Technology</td>
                </tr>
                <tr>
                  <td>Financial Aid</td>
                  <br></br>
                  <td>Web Mail</td>
                </tr>
                <tr>
                  <td>Give to CWRU</td>
                  
                  <td>Work at CWRU</td>
                </tr>
              </table>
            </div>
            </Col>
         
        </div>
      </div>
      </div>
      
      
    );
  }
}

export default Footer;