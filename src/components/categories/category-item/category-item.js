import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "styled-bootstrap-grid";

const CategoryItem = ({category}) => {
    const {id, title, photo} = category;

    return (
        <Col md={6} lg={4} className="mb-4">
            <div>
                <div className="view zoom brighten z-depth-2 rounded">
                    <img className="img-fluid"
                         src={photo}
                         alt="Sample"/>
                    <Link style={{color: '#404040'}}
                          to="/products"
                          params={{categoryId: id}}>
                        <div className="mask card-mask-color waves-effect waves-light">
                            <div className="d-flex align-items-end h-100 p-3">
                                <h5 className="mb-0">{title}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default CategoryItem;
