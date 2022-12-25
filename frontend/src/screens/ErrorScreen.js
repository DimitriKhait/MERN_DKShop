import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
    const navigate = useNavigate();

    function backHomeHandler() {
        navigate('/');
    }
    return (
        <Container>
            <Row>
                <Col className="text-center py-3">
                    <h1 className="display-1">404</h1>
                    <h3>Sorry, the page you tried cannot be found</h3>

                    <Button variant="dark" onClick={backHomeHandler}>
                        Back Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
