import React from 'react';
import Pagination from "./pagination";
import ViewTypeButtons from "./view-type-buttons";

const ControlPanel = ({currentPage, pagesCount, viewType, handleChangePage, handleChangeView = () => {}}) => {

    return (
        <section>
            <div className="row d-flex justify-content-between align-items-center">
                <ViewTypeButtons handleChangeView={handleChangeView} viewType={viewType}/>
                <Pagination
                    handleChangePage={handleChangePage}
                    pagesCount={pagesCount}
                    currentPage={currentPage}/>
            </div>
        </section>
    );
};

export default ControlPanel;
