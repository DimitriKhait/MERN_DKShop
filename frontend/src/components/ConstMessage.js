import React from 'react';
import { Alert } from 'react-bootstrap';

const ConstMessage = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>;
};

ConstMessage.defaultProps = {
    variant: 'info',
};

export default ConstMessage;
