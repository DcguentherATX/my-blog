import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from './Navigation';
import Footer from './Footer';
import blurb from '../../assets/images/blurb.png';
import model from '../../assets/images/David_Guenther.jpg';

const About = () => {
    return (
        <>
        {/* <Navigation /> */}

    <div className="about">
        <Container className="about-container">
            <Row className="about-row">
                <Col s={2} md={2} lg={1} className="blurb-col">
                    <div className="blurb-left">
                        <img src={blurb} className="blurb" />
                    </div>
                </Col>
                <Col xs={12} s={12} md= {10} lg={5} className="image-container">
                    <img src={model} className="male-model" />
                </Col>
                <Col className="about-info" xs={12} s={12} md={12} lg={6}>
                <p>
                    My name is David Guenther and I am a recent Hack Reactor bootcamp graduate located in Austin.  I moved to 
                    Austin from New York where I worked in event management and staffing, hospitality, and finance.  My interest
                    in software engineering first developed in one of my previous positions where I interacted directly with a
                    database as the main users.  Semi-annually I would collaborate with the CEO and provide ideas on how to improve
                    the database functionality, increase efficiency, and add features.  At the time, I had no experience with software
                    development, however, the CEO passed my suggestions on to the engineering team and they made it all happen.
                    I was amazed that my suggestions were put into place and dramatically improved the business.
                </p>
                <p>
                    Seeing my suggestions put into action is what first sparked my interest in software engineering.  I knew I had
                    an interest in development, but I had no idea how to switch careerss from event management to engineering.  After
                    conducting some online research, I discovered Hack Reactor, which had an extensive full stack engineering curriculum
                    that captured my attention.
                </p>
                <p>
                    The Hack Reactor program was quite a challenge.  You teach yourself JavaScript before the classes begin, review the
                    hard parts as a group, and then push forward diving into new material covering front end frameworks, servers, and databases.
                    Upon completion of the rigorous program, I realized that I knew more about software engineering than I thought possible, but I  
                    was also aware of the technologies, frameworks, and libraries that exist.  I created this site to practice some old skills whilst
                    working on new ones.  Each page has a purpose, which will be briefly described at the top.  I hope you enjoy this journey as much
                    as I have.
                </p>
                </Col>
            </Row>
        </Container>
    </div>
    {/* <Footer /> */}
    </>
    )
}

export default About;