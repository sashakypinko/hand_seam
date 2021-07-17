import React from 'react';
import styled from 'styled-components';
import {Backdrop, CircularProgress} from "@material-ui/core";

const Loader = styled(Backdrop)`
    z-index: 2000;
`;

const Spinner = styled(CircularProgress)`
    color: #323232;
    width: 100px !important;
    height: 100px !important;
`;

const MainLoader = ({loading = false}) => {

    return (
        <Loader open={loading}>
            <Spinner/>
        </Loader>
    );
};

export default MainLoader;