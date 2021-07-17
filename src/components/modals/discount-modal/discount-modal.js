import React from 'react';
import styled from 'styled-components';
import {Modal} from "react-bootstrap";
import {Trans} from "react-i18next";

const StyledModal = styled(Modal)`
    position: fixed;
    height: auto;
    top: auto;
    left: auto;
    right: 0;
    bottom: 0;
    max-width: 420px;
`;

const DiscountModal = ({open, discount = {}, handleClose}) => {

    const code = Math.random().toString(36).substr(2, 6);

    const {
        id,
        title,
        description
    } = discount;

    return (
        <StyledModal show={open}
                     size="lg"
                     className="modal-dialog modal-side modal-bottom-right"
                     centered={false}
                     onHide={() => handleClose(id, code, false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row my-3">
                    <div className="col-3">
                        <p className="text-center">
                            <i className="fas fa-gift text-primary fa-4x"/>
                        </p>
                    </div>
                    <div className="col-9">
                        <p>
                            {description}
                        </p>
                        <h2 className="mb-0">
                            <span className="badge badge-primary">
                                {code}
                            </span>
                        </h2>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary mr-2 waves-effect waves-light"
                        onClick={() => handleClose(id, code)}>
                    <i className="far fa-gem ml-1 white-text mr-2"/>
                    <Trans i18nKey="discount.accept-button"/>
                </button>
                <button className="btn btn-outline-primary waves-effect waves-light"
                        onClick={() => handleClose(id, code, false)}>
                    <Trans i18nKey="discount.decline-button"/>
                </button>
            </Modal.Footer>
        </StyledModal>
    );
};

export default DiscountModal;