import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // message is empty (meaning no errors). Adjust as needed
        if (!children) {
            setVisible(false);
            return;
        }
        // error exists. Display the message and hide after 5 secs
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [children]);

    if (!visible) return null;

    return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
