import React from 'react';

const Pagination = ({handleChangePage, pagesCount, currentPage}) => {

    let paginateButtonNumbers = Array.from(Array(pagesCount + 1).keys()).slice(1);

    paginateButtonNumbers = paginateButtonNumbers.slice(Math.max(0, currentPage - 2), currentPage + 1)

    return (
        <div className="col-12 col-md-4 text-center mb-3">
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-circle justify-content-center float-md-right mb-0">
                    <li className="page-item">
                        <a className="page-link"
                           onClick={() => handleChangePage(1)}>
                            <i className="fas fa-chevron-left"/>
                        </a>
                    </li>
                    {
                        paginateButtonNumbers.map((number) => {
                            return (
                                <li className={`page-item ${number === currentPage && 'active'}`}
                                    key={number}>
                                    <a className="page-link"
                                       onClick={() => handleChangePage(number)}>
                                        {number}
                                    </a>
                                </li>
                            );
                        })
                    }
                    <li className="page-item">
                        <a className="page-link"
                           onClick={() => handleChangePage(pagesCount)}>
                            <i className="fas fa-chevron-right"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Pagination;
