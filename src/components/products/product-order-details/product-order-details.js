import React, {useEffect, useState} from 'react';
import {Trans} from "react-i18next";
import ProductsCountButton from "../product-details/products-count-button";
import SizePicker from "../product-details/details/size-picker";
import BuyButton from "../../buttons/buy-button";
import AddToFavoritesButton from "../../buttons/add-to-favorites-button";
import {useDispatch, useSelector} from "react-redux";
import {addCartItem} from "../../../store/actions/cart";
import {selectCartItemAdding} from "../../../store/selectors";
import AddToCartButton from "./add-to-cart-button";

const ProductOrderDetails = ({product, order, loading, updateOrderCount, handleChangeSize, handleAddCartItem}) => {
    const {
        sizes = [],
    } = product;

    const {
        count
    } = order;

    return (
        <>
            <div className="table-responsive mb-2">
                <table className="table table-sm table-borderless">
                    <tbody>
                    <tr>
                        <td className="pl-0 pb-0 w-25">
                            <Trans i18nKey="product-details.quantity"/>
                        </td>
                        <td className="pb-0">
                            <Trans i18nKey="product-details.choose-size"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-0">
                            <ProductsCountButton count={count} updateOrderCount={updateOrderCount}/>
                        </td>
                        <td>
                            <SizePicker sizes={sizes} onSelect={handleChangeSize}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <BuyButton size="md"/>
            <AddToCartButton loading={loading} handleAddCartItem={handleAddCartItem}/>
            <AddToFavoritesButton size="md"/>
        </>
    );
};

const ProductOrderDetailsContainer = ({product}) => {
    const {
        sizes = []
    } = product;

    const initOrder = {
        product,
        size: sizes.length ? sizes[0] : {},
        count: 1
    };

    const [order, setOrder] = useState(initOrder);

    useEffect(() => setOrder(initOrder), [product]);

    const setOrderSize = (size) => {
        setOrder({
            ...order,
            size
        });
    };

    const updateOrderCount = (count) => {
        if (count < 1) {
            count = 1;
        }

        setOrder({...order, count});
    };

    const dispatch = useDispatch();

    const handleAddCartItem = () => dispatch(addCartItem({order}));
    const loading = useSelector(selectCartItemAdding);

    return <ProductOrderDetails
        product={product}
        order={order}
        loading={loading}
        updateOrderCount={updateOrderCount}
        handleAddCartItem={handleAddCartItem}
        handleChangeSize={setOrderSize}
    />
};

export default ProductOrderDetailsContainer;