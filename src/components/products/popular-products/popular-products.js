import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPopularProducts} from "../../../store/selectors";
import {fetchPopularProducts} from "../../../store/actions/popular-products";
import ProductsList from "../products-list";

const PopularProducts = ({products, loading}) => {

    return <ProductsList products={products} loading={loading} viewType="tileSimple"/>;
};

const PopularProductsContainer = () => {
    const dispatch = useDispatch();
    const {products, loading} = useSelector(selectPopularProducts);

    useEffect(() => {
        dispatch(fetchPopularProducts(8))
    }, []);

    return <PopularProducts products={products} loading={loading}/>;
};

export default PopularProductsContainer;