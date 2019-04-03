import React from 'react';
import { Col } from '../Grid';

import s from './Footer.css';


class Footer extends React.Component {
  render() {
    return (
        <div class="fixed-bottom">
        <style type="text/css"></style>
        <div class="footer">
        <div className={s.container}>
          <Col size={"lg-3"}>
            <div>
                <span className={s.text}>© 2017 Case Western Reserve University, 10900 Euclid Ave., Cleveland, Ohio 44106 216.368.2000 (legal notice) (privacy statement)</span>
            </div>
            </Col>
         
        </div>
      </div>
      </div>
      
      
    );
  }
}

export default Footer;