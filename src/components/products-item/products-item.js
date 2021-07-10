import React from 'react';

import './products-item.css';
import ItemTile from "./item-tile";
import ItemRow from "./item-row";
import ItemTileSimple from "./item-tile-simple";

const ProductsItem = ({product, width, viewType}) => {

    const views = {
        row: ItemRow,
        tile: ItemTile,
        tileSimple: ItemTileSimple
    }

    const Item = views[viewType];

    return <Item product={product} width={width}/>;
};

export default ProductsItem;
