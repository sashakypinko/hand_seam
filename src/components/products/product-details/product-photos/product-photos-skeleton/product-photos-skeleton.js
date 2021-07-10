import React from 'react';
import styled from 'styled-components';
import Skeleton from "@material-ui/lab/Skeleton";
import {breakpoints} from "../../../../../constants/breakpoints";

const MainPhotoSkeleton = styled(Skeleton)`
    width: 370px;
    height: 430px;

    @media (min-width: ${breakpoints.tablet}) and (max-width: 992px) {
        width: 290px;
        height: 337px;
    }
`;

const SmallPhotoSkeleton = styled(Skeleton)`
    width: 115px;
    height: 135px;
    margin: 10px;

    @media (min-width: ${breakpoints.tablet}) and (max-width: 992px) {
        width: 64px;
        height: 74px;
    }
`;

const ProductPhotosSkeleton = () => {

    return (
        <div className="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui"/>
            <div className="mdb-lightbox">
                <div className="row product-gallery mx-1">
                    <div className="col-12 mb-0">
                        <MainPhotoSkeleton variant="rect"/>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <SmallPhotoSkeleton variant="rect"/>
                            <SmallPhotoSkeleton variant="rect"/>
                            <SmallPhotoSkeleton variant="rect"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPhotosSkeleton;
