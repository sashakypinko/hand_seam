import React from 'react';
import ProductsItem from "../products-item";

import './products-list.css';
import {Row} from "styled-bootstrap-grid";
import {ProductListRowsSkeleton, ProductListTilesSkeleton} from "./product-list-skeleton";

const ProductsList = ({products, loading, itemWidth = 4, viewType}) => {
    const Skeleton = viewType === 'tile' ? ProductListTilesSkeleton : ProductListRowsSkeleton;

    return (
        <section className="product-list">
            <Row>
                {
                    loading ?
                        <Skeleton itemWidth={itemWidth}/> :
                        products.map((product) => {
                            return (
                                <ProductsItem
                                    product={product}
                                    width={itemWidth}
                                    viewType={viewType}/>
                            );
                        })
                }
            </Row>
        </section>
    );
};

export default ProductsList;
