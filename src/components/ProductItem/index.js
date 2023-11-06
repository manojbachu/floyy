import './index.css'

const ProductItem = props => {
  const {productDetails, addToCart} = props
  const {id, name, image, price, weight} = productDetails

  const onAddCart = () => {
    addToCart(id)
  }

  return (
    <li className="product-item">
      <img className="image" src={image} alt={name} />

      <p className="price">{price}</p>
      <p className="name">{name}</p>
      <p className="weight">{weight}</p>
      <div className="button-container">
        <button onClick={onAddCart} className="product-item-btn" type="button">
          +
        </button>
      </div>
    </li>
  )
}

export default ProductItem
