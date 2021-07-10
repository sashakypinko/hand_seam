import React from 'react';
import {changeCartItemCount, removeCartItem} from "../../store/actions/cart";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import ProductsCountButton from "../product-details/products-count-button";
import PriceLabel from "../products-item/price-label";
import {BASE_DARK} from "../../constants/colors";
import {Trans} from "react-i18next";

const CartItem = ({cartItem}) => {

    const {
        id,
        product: {
            id: productId,
            name,
            category,
            primary_photo,
            secondary_photo,
            color,
            price
        },
        size: {name: sizeName},
        count
    } = cartItem;

    const dispatch = useDispatch();

    const handleUpdateOrderCount = (newCount) => {
        dispatch(changeCartItemCount(id, newCount));
    };

    const handleRemoveOrder = () => {
        dispatch(removeCartItem(id));
    };

    return (
        <>
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100"
                             src={primary_photo}
                             alt={name}/>
                        <Link to={`/products/${productId}`}>
                            <div className="mask waves-effect waves-light">
                                <img className="img-fluid w-100"
                                     src={secondary_photo}
                                     alt={name}/>
                                <div className="mask rgba-black-slight waves-effect waves-light"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>{name}</h5>
                                <p className="mb-3 text-muted text-uppercase small">{category.title}</p>
                                <p className="mb-2 text-muted text-uppercase small">Цвет: {color.name}</p>
                                <p className="mb-3 text-muted text-uppercase small">Размер: {sizeName}</p>
                            </div>
                            <div>
                                <ProductsCountButton count={count} updateOrderCount={handleUpdateOrderCount}/>
                                <small id="passwordHelpBlock"
                                       className="form-text text-muted text-center">
                                    <Trans i18nKey="cart.item.note" values={{count}}/>
                                </small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <a type="button"
                                   onClick={handleRemoveOrder}
                                   className="card-link-secondary small text-uppercase mr-3">
                                    <i className="fas fa-trash-alt mr-1"/>
                                    <Trans i18nKey="cart.item.delete"/>
                                </a>
                                <a type="button"
                                   className="card-link-secondary small text-uppercase">
                                    <i className="fas fa-heart mr-1"/>
                                    <Trans i18nKey="cart.item.move-to-favorites"/>
                                </a>
                            </div>
                            <PriceLabel price={price} priceColor={BASE_DARK}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-4"/>
        </>
    );
};

export default CartItem;
