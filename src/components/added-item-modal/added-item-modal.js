import React from 'react';
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectAddedItemModalStatus} from "../../store/selectors";
import {hideAddedItemModal} from "../../store/actions/cart";
import RelatedProducts from "../product-details/related-products";
import {Trans} from "react-i18next";

const AddedItemModal = ({open, hideModal}) => {

    return (
        <Modal show={open} size="lg" onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey="cart.modal.title"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="media mb-3">
                    <img className="d-flex z-depth-1 rounded mr-3" width="64px"
                         src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                         alt="Sample"/>
                    <div className="media-body">
                        <h5>Fantasy T-shirt</h5>
                        <p className="mb-0"><span><strong>$12.99</strong></span></p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <a href="#" type="button" className="card-link-secondary small text-uppercase">
                        <Trans i18nKey="cart.modal.button.continue-shopping"/>
                    </a>
                    <button type="button" className="btn btn-primary waves-effect waves-light">
                        <Trans i18nKey="cart.modal.button.go-to-cart"/>
                    </button>
                </div>
                <hr/>
                <RelatedProducts/>
            </Modal.Body>
            <Modal.Footer>
                <a type="button" className="card-link-secondary small text-uppercase">
                    <Trans i18nKey="cart.modal.button.continue-shopping"/>
                </a>
            </Modal.Footer>
        </Modal>
    );
};

const AddedItemModalContainer = () => {
    const open = useSelector(selectAddedItemModalStatus);
    const dispatch = useDispatch();

    const hideModal = () => dispatch(hideAddedItemModal());

    return <AddedItemModal open={open} hideModal={hideModal}/>
};

export default AddedItemModalContainer;
