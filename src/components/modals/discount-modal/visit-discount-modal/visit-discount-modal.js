import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDiscounts, addDiscountCode} from "../../../../store/actions/discount";
import {selectVisitDiscount} from "../../../../store/selectors";
import DiscountModal from "../discount-modal";

const VisitDiscountModal = ({discount, handleAddDiscountCode}) => {
    const [open, setOpen] = useState(false);

    const handleClose = (...args) => {
        setOpen(false);
        handleAddDiscountCode(...args);
    };

    useEffect(() => {
        if(Object.keys(discount).length) {
            setOpen(true);
        }
    }, [discount]);

    return <DiscountModal open={open} discount={discount} handleClose={handleClose}/>
};

const VisitDiscountModalContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscounts());
    }, []);

    const discount = useSelector(selectVisitDiscount);

    const handleAddDiscountCode = (id, code, accepted) => {
        dispatch(addDiscountCode(id, code, accepted))
    };

    return <VisitDiscountModal discount={discount} handleAddDiscountCode={handleAddDiscountCode}/>
};

export default VisitDiscountModalContainer;