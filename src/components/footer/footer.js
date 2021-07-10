import React from 'react';

const Footer = () => {

    return (
        <footer className="page-footer font-small elegant-color">
            <div className="container text-center text-md-left pt-4 pt-md-5">
                <div className="row mt-1 mt-md-0 mb-4 mb-md-0">
                    <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                        <h5>About me</h5>
                        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
                        <p className="foot-desc mb-0">
                            Here you can use rows and columns to organize your footer
                            content. Lorem
                            ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.
                        </p>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                        <h5>Products</h5>
                        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
                        <ul className="list-unstyled foot-desc">
                            <li className="mb-2">
                                <a href="#">MDBootstrap</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">MDWordPress</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">BrandFlow</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Bootstrap Angular</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                        <h5>Useful links</h5>
                        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
                        <ul className="list-unstyled foot-desc">
                            <li className="mb-2">
                                <a href="#">Your Account</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Become an Affiliate</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Shipping Rates</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                        <h5>Contacts</h5>
                        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>
                        <ul className="fa-ul foot-desc ml-4">
                            <li className="mb-2">
                                                <span className="fa-li">
                                                    <i className="far fa-map"/>
                                                </span>
                                New York, Avenue Street 10
                            </li>
                            <li className="mb-2"><span className="fa-li">
                                                <i className="fas fa-phone-alt"/>
                                            </span>
                                042 876 836 908
                            </li>
                            <li className="mb-2"><span className="fa-li">
                                                <i className="far fa-envelope"/>
                                            </span>
                                company@example.com
                            </li>
                            <li><span className="fa-li">
                                                <i className="far fa-clock"/>
                                            </span>
                                Monday - Friday: 10-17
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default Footer;
