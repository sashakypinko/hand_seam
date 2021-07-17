import React from 'react';
import {Badge, Col} from "react-bootstrap";

const CodesItem = ({code}) => {
    const {
        code: discountCode = '',
        discount: {
            amount = ''
        } = {}
    } = code;

    return (
        <>
            <div className="row d-flex justify-content-between" style={{maxWidth: '300px'}}>
                <Col md={3}>
                    <Badge variant="primary">{discountCode}</Badge>
                </Col>
                <Col md={5} className="d-flex align-items-center"
                style={{fontSize: '14px'}}>
                    Скидка {amount}%
                </Col>
                <Col md={4} className="d-flex align-items-center p-0">
                    <a className="card-link-secondary small text-uppercase"
                       style={{fontSize: '10px'}}>
                        использовать
                    </a>
                </Col>
            </div>
            <hr/>
        </>
    );
};

export default CodesItem;