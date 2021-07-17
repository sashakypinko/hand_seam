import React from 'react';
import Skeleton from "@material-ui/lab/Skeleton";
import ProductsCountButton from "../../../products/product-details/products-count-button";
import {Trans} from "react-i18next";
import PriceLabel from "../../../products/products-item/price-label";
import {BASE_DARK} from "../../../../constants/colors";

const CartItemSkeleton = () => {
    return (
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <Skeleton variant="rect" height={168} width="100%"/>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Skeleton height={30} width={150}/>
                            <Skeleton height={30} width={90}/>
                            <Skeleton height={30} width={100}/>
                            <Skeleton height={30} width={80}/>
                        </div>
                        <div>
                            <Skeleton height={50} width={140}/>
                            <Skeleton height={10} width={135}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <Skeleton height={40} width="60%"/>
                        <Skeleton height={40} width="15%"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CartListSkeleton = () => {

    return (
        <>
            <CartItemSkeleton/>
            <CartItemSkeleton/>
            <CartItemSkeleton/>
        </>
    );
};

export default CartListSkeleton;