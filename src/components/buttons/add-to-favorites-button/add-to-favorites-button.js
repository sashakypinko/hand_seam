import React from 'react';

const AddToFavoritesButton = ({size = 'sm'}) => {
    return (
        <button className={`btn btn-danger btn-${size} px-3 mb-lg-2 material-tooltip-main waves-effect waves-light`}
                data-toggle="tooltip"
                data-placement="top">
            <i className="far fa-heart"/>
        </button>
    );
}

export default AddToFavoritesButton;
