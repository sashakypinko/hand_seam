import React from "react";
import {useSelector} from "react-redux";
import {selectProductList} from "../../../store/selectors";
import ErrorIndicator from "../../error-indicator";
import ProductsList from "../products-list";


const ProductsListContainer = ({itemWidth = 4, viewType = 'tile'}) => {
    const {products, loading, error} = useSelector(selectProductList);

    if (error) {
        return <ErrorIndicator/>;
    }

    return <ProductsList products={products} loading={loading} itemWidth={itemWidth} viewType={viewType}/>;
};

export default ProductsListContainer