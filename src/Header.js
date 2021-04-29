import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [state] = useStateValue();

  const handleAuth = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={state.user ? "" : "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionOne hide-sm">
              Hello {state.user ? state.user.email : "Guest"}
            </span>
            <span className="header__optionTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionOne hide-sm">Returns</span>
            <span className="header__optionTwo">Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionOne hide-sm">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon id="#faq1" />
            <span className="header_basketCount header__optionTwo">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
