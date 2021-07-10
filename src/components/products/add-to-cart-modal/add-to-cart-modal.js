import React from 'react';
import {Col, Modal, Row} from "react-bootstrap";
import {Trans} from "react-i18next";
import ContinueShoppingButton from "../../buttons/continue-shopping-button";
import {hideAddToCartModal} from "../../../store/actions/cart";
import {useDispatch, useSelector} from "react-redux";
import {selectAddingItem, selectAddToCartModalStatus} from "../../../store/selectors";
import Details from "../product-details/details";
import ProductPhoto from "../../photos/product-photo";

const AddToCartModal = ({open, product = {}, hideModal}) => {

    const {
        id,
        primary_photo,
        secondary_photo,
    } = product;

    return (
        <Modal show={open} size="xl" onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey="cart.add-item-modal.title"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={12} md={12} lg={4}>
                        <ProductPhoto primaryPhoto={primary_photo} secondaryPhoto={secondary_photo} productId={id}/>
                    </Col>
                    <Col sm={12} md={12} lg={8}>
                        <Details product={product}/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <ContinueShoppingButton hideModal={hideModal}/>
            </Modal.Footer>
        </Modal>
    );
};

const AddToCartModalContainer = () => {
    const open = useSelector(selectAddToCartModalStatus);
    const product = useSelector(selectAddingItem);
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hideAddToCartModal());

    return <AddToCartModal open={open} product={product} hideModal={hideModal}/>
};

export default AddToCartModalContainer;