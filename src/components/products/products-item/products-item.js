import React from 'react';

import './products-item.css';
import ItemTile from "./item-tile";
import ItemRow from "./item-row";
import ItemTileSimple from "./item-tile-simple";
import {useDispatch} from "react-redux";
import {showAddToCartModal} from "../../../store/actions/cart";

const ProductsItem = ({product, width, viewType}) => {
    const dispatch = useDispatch();
    const views = {
        row: ItemRow,
        tile: ItemTile,
        tileSimple: ItemTileSimple
    }

    const Item = views[viewType];

    const handleAddToCart = () => {
        dispatch(showAddToCartModal(product));
    };

    return <Item product={product} width={width} handleAddToCart={handleAddToCart}/>;
};

export default ProductsItem;
