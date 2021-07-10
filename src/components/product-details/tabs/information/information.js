import React from 'react';

const Information = () => {

    return (
        <>
            <div>
                <h5>Additional Information</h5>
                <table className="table table-striped table-bordered mt-3">
                    <thead>
                    <tr>
                        <th scope="row" className="w-150 dark-grey-text h6">Weight</th>
                        <td><em>0.3 kg</em></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className="w-150 dark-grey-text h6">Dimensions</th>
                        <td><em>50 × 60 cm</em></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <h5><span>1</span> review for <span>Fantasy T-shirt</span></h5>
                <div className="media mt-3 mb-4">
                    <img className="d-flex mr-3 z-depth-1"
                         src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                         width="62" alt="Generic placeholder image"/>
                    <div className="media-body">
                        <div className="d-flex justify-content-between">
                            <p className="mt-1 mb-2">
                                <strong>Marthasteward </strong>
                                <span>– </span><span>January 28, 2020</span>
                            </p>
                            <ul className="rating mb-0">
                                <li>
                                    <i className="fas fa-star fa-sm text-primary"/>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-primary"/>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-primary"/>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-primary"/>
                                </li>
                                <li>
                                    <i className="far fa-star fa-sm text-primary"/>
                                </li>
                            </ul>
                        </div>
                        <p className="mb-0">Nice one, love it!</p>
                    </div>
                </div>
                <hr/>
                <h5 className="mt-4">Add a review</h5>
                <p>Your email address will not be published.</p>
                <div className="my-3">
                    <ul className="rating mb-0">
                        <li>
                            <a>
                                <i className="fas fa-star fa-sm text-primary"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fas fa-star fa-sm text-primary"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fas fa-star fa-sm text-primary"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fas fa-star fa-sm text-primary"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="far fa-star fa-sm text-primary"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="md-form md-outline">
                                        <textarea id="form76" className="md-textarea form-control pr-6"
                                                  rows="4"/>
                        <label htmlFor="form76">Your review</label>
                    </div>
                    <div className="md-form md-outline">
                        <input type="text" id="form75" className="form-control pr-6"/>
                        <label htmlFor="form75">Name</label>
                    </div>
                    <div className="md-form md-outline">
                        <input type="email" id="form77" className="form-control pr-6"/>
                        <label htmlFor="form77">Email</label>
                    </div>
                    <div className="text-right pb-2">
                        <button type="button" className="btn btn-primary">Add a review</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Information;
