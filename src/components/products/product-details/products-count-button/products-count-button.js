import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Minus = styled(RemoveIcon)`
    margin: 0 10px;
`;

const Plus = styled(AddIcon)`
    margin-left: 10px;
`;

const ProductsCountButton = ({count = 1, updateOrderCount}) => {

    const handleChangeCount = (e) => updateOrderCount(parseInt(e.target.value) || 1);

    return (
        <div className="def-number-input number-input safari_only mb-0">
            <Minus onClick={() => updateOrderCount(count - 1)}/>
            <input className="quantity"
                   type="number"
                   min="1"
                   onChange={handleChangeCount}
                   value={count}/>
            <Plus onClick={() => updateOrderCount(count + 1)}/>
        </div>
    );
};

export default ProductsCountButton;
