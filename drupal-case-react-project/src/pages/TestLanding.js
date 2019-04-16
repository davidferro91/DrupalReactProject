import React, { Component } from 'react';
import LogoTop from '../components/LogoTop';
import DepartmentHeader from '../components/DepartmentHeader';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import BootCampCarousel from '../components/BootCampCarousel';
import { TextHolder } from '../components/Holders';
import { Container, Row, Col } from '../components/Grid';
import { ImageCard } from '../components/Cards';

class TestLandingPage extends Component {
  render() {
    return (
      <div>
        <LogoTop></LogoTop>
        <DepartmentHeader>Department of Awesomeness</DepartmentHeader>
        <Navbar></Navbar>
        <Wrapper>
          <BootCampCarousel header1="AWESOME"
            header2="BOOTCAMP"
            header3="DEMODAY!!!!"
            src1="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_coding.jpg"
            src2="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/homepage_hero_data.jpg"
            src3="https://cdn.cwrubootcamps.com/wp-content/uploads/sites/91/2018/12/img_hero.jpg"></BootCampCarousel>

          <TextHolder textType="header">THIS IS FREAKING AWESOME!!!!</TextHolder>
          <TextHolder>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim justo, laoreet sit amet tortor quis, tincidunt venenatis elit. Nam pulvinar imperdiet lorem. Proin ut ligula ornare, interdum neque ac, volutpat metus. Vivamus maximus ullamcorper mi vel porta. Phasellus vestibulum scelerisque leo sit amet euismod. Cras vel pretium mi. Suspendisse nec lectus in urna sagittis vehicula. Nam sed pretium odio. Praesent vitae feugiat lorem. Aliquam in lacinia arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque quis ultricies urna, ac tempus erat. Sed et ornare ex.

Morbi vulputate mollis dui, sed accumsan elit feugiat gravida. Suspendisse quis justo eget erat ultrices posuere. Cras quis malesuada elit. Fusce eu lacus sagittis, lobortis arcu id, ullamcorper turpis. Fusce sodales scelerisque hendrerit. Quisque malesuada libero non nibh dignissim laoreet. Nullam pellentesque varius eros sed elementum.

Sed pulvinar, enim suscipit venenatis congue, enim ipsum aliquet lectus, bibendum dignissim nibh eros sit amet enim. Donec feugiat ex vitae turpis sagittis pharetra. Quisque interdum posuere lectus. Ut non magna condimentum, tempor arcu eget, suscipit tellus. Ut ut felis at justo vulputate dapibus in nec massa. Nulla maximus erat id mauris dignissim, vulputate vulputate libero rutrum. Donec ullamcorper erat enim, eu dignissim ipsum feugiat vitae. Sed varius ultricies faucibus. Nullam id erat pretium, sodales eros non, accumsan diam. Integer lacinia sit amet dui non aliquet. Maecenas vulputate justo sed enim posuere, eu tristique ante placerat.

Sed aliquet sem lorem, nec volutpat justo dictum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris eu nibh ut leo sollicitudin scelerisque ut vitae lectus. Sed scelerisque turpis diam, sit amet scelerisque quam auctor bibendum. Sed elit ligula, tincidunt eget semper vel, dictum sit amet nibh. Praesent non nunc tellus. Nulla nunc massa, pellentesque at ultrices non, efficitur non est. Etiam in justo felis. In cursus laoreet risus, id fermentum orci consequat a. Suspendisse facilisis imperdiet nisl, eu aliquam leo. Pellentesque porttitor odio ligula, eu maximus lectus sodales vitae. Donec condimentum odio massa.

Ut consectetur, mauris vel faucibus varius, lacus ex imperdiet ante, non ultrices diam tortor sit amet lorem. Donec eu molestie augue. Donec eget quam consequat, laoreet urna quis, fringilla lectus. Etiam cursus, eros a feugiat facilisis, orci ipsum luctus massa, vel volutpat leo eros a odio. Curabitur commodo sem eget tempus placerat. Donec pharetra pharetra tortor ultrices facilisis. Sed lorem felis, convallis quis venenatis id, pellentesque vitae dui. Nam lacinia nulla nec porttitor dignissim. Maecenas enim eros, feugiat vel libero id, scelerisque convallis est. Nunc in tempor sem. Donec eget turpis in erat condimentum sodales in ac massa. Cras sed dapibus nunc. Curabitur tristique est non velit pulvinar mattis. Praesent malesuada mi vel nisi vestibulum aliquam. Aliquam faucibus lectus urna, a sagittis nunc vestibulum vitae. Mauris ut quam ut lacus ornare mattis.
            </TextHolder>
            <Container>
              <Row>
                <Col size='lg-2'>
                <ImageCard name="Coolio" src="https://us.123rf.com/450wm/noravector/noravector1511/noravector151100061/48707073-stock-vector-super-awesome-comic-book-style-word-on-comic-book-abstract-background-.jpg?ver=6" linkName="Isn't this cool?">More lorem ipsum stuff!</ImageCard>
                </Col>
                <Col size='lg-10'></Col>
              </Row>
            </Container>
        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}
export default TestLandingPage;