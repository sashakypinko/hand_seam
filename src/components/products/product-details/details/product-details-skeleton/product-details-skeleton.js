import React from 'react';
import {Skeleton} from "@material-ui/lab";

const ProductDetailsSkeleton = () => {

    return (
        <>
            <Skeleton width="40%" height={30}/>
            <Skeleton width="25%"/>
            <Skeleton width="32%" height={25}/>
            <Skeleton height={150}/>
            <Skeleton width="50%" height={60}/>
            <Skeleton height={90}/>
            <Skeleton width="55%" height={60}/>
        </>
    );
}

export default ProductDetailsSkeleton;
