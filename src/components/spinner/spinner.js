import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Backdrop} from "@material-ui/core";

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
`;

const Spinner = () => {
    return (
        <Backdrop open={false}>
            <CircularProgress color="inherit" />
        </Backdrop>

    );
};

export default Spinner;
