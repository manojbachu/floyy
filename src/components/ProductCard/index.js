import ProductItem from '../ProductItem'
import './index.css'

const ProductCard = props => {
  const {details, addToCart} = props
  const {name, products} = details
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <ul className="product-list">
        {products.map(each => (
          <ProductItem addToCart={addToCart} productDetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductCard
