import {useSelector} from "react-redux";
import React from "react";
import ProductsList from "../products-list";
import ErrorIndicator from "../../error-indicator";
import {selectProductList} from "../../../store/selectors";

const ProductsListContainer = ({itemWidth = 4, viewType = 'tile'}) => {
    const {products, loading, error} = useSelector(selectProductList);

    if (error) {
        return <ErrorIndicator/>;
    }

    return <ProductsList products={products} loading={loading} itemWidth={itemWidth} viewType={viewType}/>;
};

export default ProductsListContainer;
