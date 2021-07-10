import React from 'react';

const ProductPhotos = ({photos}) => {

    return (
        <div className="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui"/>
            <div className="mdb-lightbox">
                <div className="row product-gallery mx-1">
                    <div className="col-12 mb-0">
                        {
                            photos.map((photo, index) => {
                                const main = index === 0;

                                return (
                                    <figure className={`view overlay rounded z-depth-1 ${main && 'main-img'}`}
                                            style={main ? {maxHeight: '450px'} : {visibility: 'hidden'}}>
                                        <a>
                                            <img className="img-fluid z-depth-1"
                                                 src={photo}/>
                                        </a>
                                    </figure>
                                );
                            })
                        }
                    </div>
                    <div className="col-12">
                        <div className="row">
                            {
                                photos.map((photo) => {
                                    return (
                                        <div className="col-3">
                                            <div className="view overlay rounded z-depth-1 gallery-item hoverable">
                                                <img className="img-fluid"
                                                     src={photo}/>
                                                <div className="mask rgba-white-slight"/>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPhotos;
