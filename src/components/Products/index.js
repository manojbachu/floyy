import {Component} from 'react'
import ProductCard from '../ProductCard'

class Products extends Component {
  state = {prodctsList: []}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()
    const {categories} = data
    this.setState({prodctsList: categories})
  }

  render() {
    const {prodctsList} = this.state
    const {addToCart} = this.props

    return (
      <div className="products-container">
        {prodctsList.map(each => (
          <ProductCard details={each} key={each.name} addToCart={addToCart} />
        ))}
      </div>
    )
  }
}

export default Products
