import React, {useEffect, useState} from 'react';
import {Badge, IconButton, withStyles} from "@material-ui/core";
import {fetchCartItemsCount} from "../../store/actions/cart";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItemsCount} from "../../store/selectors";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom";
import LanguageButton from "./language-button";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Header = ({cartItemsCount, isTop}) => {

    return (
        <header>
            <nav
                className={`navbar navbar-expand-md navbar-light fixed-top scrolling-navbar navbar-transparent ${!isTop && 'top-nav-collapse'}`}>
                <div className="container-fluid">
                    <Link className="nav-item nav-link header-link mr-5" to="/">
                        HAND SEAM
                    </Link>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav ml-auto">
                            <LanguageButton/>
                            <li className="nav-item">
                                <Link className="nav-item nav-link header-link mr-5" to="/cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={cartItemsCount} color="secondary">
                                            <ShoppingCartIcon/>
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron jumbotron-image color-grey-light"
                 style={{
                     backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/clothes(3)-crop.jpg')",
                     height: '400px'
                 }}>
                <div className="mask rgba-black-strong d-flex align-items-center h-100">
                    <div className="container text-center white-text py-5">
                        <h1 className="mb-3">Hand Seam</h1>
                        <p className="mb-0"><i className="fas fa-quote-left mr-2"/>
                            Style is something each of us already has, all we need to do is find it
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

const HeaderContainer = () => {
    const [isTop, setIsTop] = useState(true);
    const cartItemsCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    const handleScroll = () => setIsTop(document.documentElement.scrollTop < 300);

    useEffect(() => {
        dispatch(fetchCartItemsCount());
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    return <Header cartItemsCount={cartItemsCount} isTop={isTop}/>;
}

export default HeaderContainer;
