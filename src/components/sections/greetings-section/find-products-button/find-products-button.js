import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

const StyledSearchIcon = styled(SearchIcon)`
    margin-left: 20px;
`;

const FindProductsButton = () => {

    return (
        <Link className="btn btn-block btn-primary btn-lg px-3 mb-lg-2  waves-effect waves-light"
              to="/products">
            Найти одежду
            <StyledSearchIcon/>
        </Link>
    );
};

export default FindProductsButton;
