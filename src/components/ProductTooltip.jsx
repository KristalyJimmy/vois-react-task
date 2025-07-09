import '../styles/ProductTooltip.css';

function ProductTooltip({ product }) {
  return (
    <div className="tooltip-box-card">
      <div className="tooltip-content">
        <div className="tooltip-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="tooltip-details">
          <p className="tooltip-section-title">Description</p>
          <p className="tooltip-description">{product.description}</p>
          <p className="tooltip-section-title">Key Features</p>
          <div className="tooltip-features">
            {product.features.map((feature,index) => (
              <li key={index}>
                  <strong className="tooltip-feature">{feature.key}:</strong> <span className="tooltip-feature-value">{feature.value}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTooltip;
