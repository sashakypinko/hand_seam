import React from 'react';
import OrderDetails from "./order-details";
import Discount from './discount';
import {useSelector} from "react-redux";
import {selectCartTotalPrice} from "../../store/selectors";

const Order = ({totalPrice}) => {
    const initOrder = {

    };

    return (
        <>
            <OrderDetails total={totalPrice}/>
            <Discount/>
        </>

    );
};

const OrderContainer = () => {
    const totalPrice = useSelector(selectCartTotalPrice);

    return <Order totalPrice={totalPrice}/>
};

export default OrderContainer;