import React from 'react';
import {BASE_BLUE, BASE_DARK} from "../../../../constants/colors";

const ViewTypeButtons = ({handleChangeView, viewType}) => {

    return (
        <div className="col-12 col-md-3 text-center text-md-left">
            <a className="text-reset"
               onClick={() => handleChangeView('row')}>
                <i className="fas fa-th-list fa-lg mr-1"
                   style={{color: viewType === 'row' ? BASE_BLUE : BASE_DARK}}/>
            </a>
            <a className="text-reset"
               onClick={() => handleChangeView('tile')}>
                <i className="fas fa-th-large fa-lg"
                   style={{color: viewType === 'tile' ? BASE_BLUE : BASE_DARK}}/>
            </a>
        </div>
    );
};

export default ViewTypeButtons;
