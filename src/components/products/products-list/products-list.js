import React from 'react';
import ProductsItem from "../products-item";

import './products-list.css';
import {Row} from "styled-bootstrap-grid";
import {
    ProductListRowsSkeleton,
    ProductListsSimpleTilesSkeleton,
    ProductListTilesSkeleton
} from "./product-list-skeleton";

const ProductsList = ({products, loading, itemWidth = 4, viewType, handleItemClick}) => {
    const skeletons = {
        row: ProductListRowsSkeleton,
        tile: ProductListTilesSkeleton,
        tileSimple: ProductListsSimpleTilesSkeleton
    };

    const Skeleton = skeletons[viewType];

    return (
        <section className="product-list">
            <Row>
                {
                    loading ?
                        <Skeleton itemWidth={itemWidth}/> :
                        products.map((product) => {
                            return (
                                <ProductsItem
                                    key={product.id}
                                    product={product}
                                    width={itemWidth}
                                    handleClick={handleItemClick}
                                    viewType={viewType}/>
                            );
                        })
                }
            </Row>
        </section>
    );
};

export default ProductsList;