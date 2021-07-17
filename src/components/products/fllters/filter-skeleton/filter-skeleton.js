import React from 'react';
import styled from 'styled-components';
import {Skeleton} from "@material-ui/lab";

const StyledSkeleton = styled(Skeleton)`
    margin-bottom: 10px;
`;

const FilterSkeleton = () => {

    return (
        <>
            <Skeleton width="30%" height={40}/>
            <StyledSkeleton width="100%" height={70}/>
            <StyledSkeleton width="100%" height={70}/>
            <StyledSkeleton width="100%" height={70}/>
            <StyledSkeleton width="100%" height={70}/>
            <StyledSkeleton width="80%" height={100}/>
            <StyledSkeleton width="50%" height={40}/>
        </>
    );
};

export default FilterSkeleton;