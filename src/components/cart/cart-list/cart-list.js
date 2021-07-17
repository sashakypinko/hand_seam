import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "styled-bootstrap-grid";
import CartItem from "../cart-item";
import ExpectedDelivery from "./expected-delivery";
import PaymentInfo from "./payment-info";
import {Trans} from "react-i18next";
import {selectCartItems} from "../../../store/selectors";
import {fetchCartList} from "../../../store/actions/cart";
import ErrorIndicator from "../../error-indicator";
import CartListSkeleton from "./cart-list-skeleton";
import Order from "../../order/order";

const CartList = ({cartItems, loading}) => {

    return (
        <Container>
            <section className="mt-5 mb-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card wish-list mb-4">
                            <div className="card-body">
                                <h5 className="mb-4">
                                    <Trans i18nKey="cart.list.title"/>
                                </h5>
                                {
                                    loading ?
                                        <CartListSkeleton/> :
                                        cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)
                                }
                                <p className="text-primary mb-0">
                                    <i className="fas fa-info-circle mr-1"/>
                                    <Trans i18nKey="cart.list.footer-message"/>
                                </p>
                            </div>
                        </div>
                        <ExpectedDelivery/>
                        <PaymentInfo/>
                    </div>
                    <div className="col-lg-4">
                        <Order/>
                    </div>
                </div>
            </section>
        </Container>
    );
};

const CartListContainer = () => {
        const {cartItems, loading, error} = useSelector(selectCartItems);
        const dispatch = useDispatch();

        useEffect(() => dispatch(fetchCartList()), []);

        if (error) {
            return <ErrorIndicator/>
        }

        return <CartList cartItems={cartItems} loading={loading}/>
    }
;

export default CartListContainer;
