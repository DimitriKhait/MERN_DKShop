import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0c0020' }}>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <h6 style={{ color: '#ffffff' }}>
                            Copyright &copy; {new Date().getFullYear()} DK Shop
                        </h6>
                        <h6 style={{ color: '#ffffff' }}>
                            All rights reserved
                        </h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
