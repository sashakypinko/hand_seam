import React from 'react';
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {hideAddedItemModal} from "../../../store/actions/cart";
import {Trans} from "react-i18next";
import RelatedProducts from "../../products/product-details/related-products";
import {selectAddedItem, selectAddedItemModalStatus, selectProductList} from "../../../store/selectors";
import PriceLabel from "../../products/products-item/price-label";
import {BASE_DARK} from "../../../constants/colors";
import ContinueShoppingButton from "../../buttons/continue-shopping-button";
import GoToCartButton from "../../buttons/go-to-cart-button";

const AddedItemModal = ({open, hideModal, products, product = {}}) => {

    const {
        name = '',
        price = 0,
        primary_photo = ''
    } = product;

    return (
        <Modal show={open} size="lg" onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title><Trans i18nKey="cart.added-item-modal.title"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="media mb-3">
                    <img className="d-flex z-depth-1 rounded mr-3"
                         width="64px"
                         src={primary_photo}
                         alt={name}/>
                    <div className="media-body">
                        <h5>{name}</h5>
                        <PriceLabel price={price} priceColor={BASE_DARK}/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <ContinueShoppingButton hideModal={hideModal}/>
                    <GoToCartButton hideModal={hideModal}/>
                </div>
                <hr/>
                <RelatedProducts handleItemClick={hideModal} products={products}/>
            </Modal.Body>
            <Modal.Footer>
                <ContinueShoppingButton hideModal={hideModal}/>
            </Modal.Footer>
        </Modal>
    );
};

const AddedItemModalContainer = () => {
    const open = useSelector(selectAddedItemModalStatus);
    const product = useSelector(selectAddedItem);
    const {products} = useSelector(selectProductList);
    const dispatch = useDispatch();
    const hideModal = () => dispatch(hideAddedItemModal());

    return <AddedItemModal open={open} hideModal={hideModal} products={products} product={product}/>
};

export default AddedItemModalContainer;
