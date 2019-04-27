import React, { Component } from 'react';
import { Container } from '../Grid';

class ParallaxBackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: -200
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset - 200
    });
  };

  render() {
    return (
      <div className="parallax-background" style={{
        backgroundPositionY: this.state.offset/1.5,
        backgroundImage: "url(" + this.props.backgroundImageSrc + ")",
        height: "45vh",
        backgroundSize: "100%"
      }}>
        <div className="info-container" style={{
          bottom: this.state.offset/2,
          paddingTop: 125
        }}>
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}

export default ParallaxBackgroundImage;