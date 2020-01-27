import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import model from '../../assets/images/model.jpg';

const About = () => {
    return (
    <div className="about">
        <Container className="about-container">
            <Row className="about-row">
                <Col s={12} md={6}>
                    <img src={model} className="male-model" />
                </Col>
                <Col s={12} md={6}>
                <p>
                    Fugiat voluptate ullamco reprehenderit officia duis enim commodo ullamco reprehenderit voluptate fugiat mollit. Est labore aute duis incididunt occaecat. Laboris sint eu anim aliquip reprehenderit. Qui consectetur exercitation cillum occaecat minim exercitation ex exercitation consequat ad est. Sunt sint velit ex officia minim laborum sint nostrud. Officia qui cupidatat labore deserunt nulla ipsum. Aute ex consectetur quis dolor ex aliquip occaecat incididunt reprehenderit irure.
                </p>
                <p>
                    Eu ipsum incididunt non nulla ad consectetur mollit proident sunt deserunt consectetur. Id aliquip voluptate cupidatat Lorem dolore mollit commodo mollit pariatur non et ad. Dolor aute laboris ex incididunt cupidatat sit. Deserunt elit tempor nisi nulla et quis cillum.
                </p>
                <p>
                    Dolore ex et sit consequat id dolore laboris qui tempor duis consequat culpa. Sint eiusmod quis duis fugiat. Ullamco veniam anim nulla elit commodo. Fugiat exercitation ut excepteur consectetur commodo nostrud excepteur minim ex nostrud. Ut nisi cillum laborum irure ullamco occaecat aliqua Lorem eiusmod dolore Lorem.
                </p>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default About;