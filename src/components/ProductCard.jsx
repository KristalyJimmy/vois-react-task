import { useState } from 'react';
import ProductTooltip from '../components/ProductTooltip';
import tooltipStatic from '../assets/tooltip-static.svg';
import tooltipHover from '../assets/tooltip-hover.svg';
import '../styles/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="product-card">
       <div className="product-image-container">
          <div className="tooltip-icon"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src={showTooltip ? tooltipHover : tooltipStatic} alt="tooltip"/>
            {showTooltip && <ProductTooltip product={product} />}
          </div>
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">£{product.price}</p>
      </div>
      <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
