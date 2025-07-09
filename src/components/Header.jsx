import "../styles/Header.css";
import cartImage from "../assets/cart.svg";

function Header({ cartCount, onCartClick  }) {
  const title = "Hallo World";
    return (
      <div className="background">
        <h1 className="header-title">{capitalizeText(title)}</h1>
        <div className="cart">
          <button type="button" onClick={onCartClick}>
            <img src={cartImage} alt="cart" />
            <p className="cart-title">Shopping Cart</p>
            {cartCount > 0 && (
                <span className="cart-count-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    );
}

function capitalizeText(text) {
  return text.toUpperCase();
}

export default Header;
