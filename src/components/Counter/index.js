import {Component} from 'react'
import Header from '../Header'
import CategoryPanel from '../CategoryPanel'
import Products from '../Products'

import './index.css'

class Counter extends Component {
  render() {
    const {addToCart} = this.props
    return (
      <>
        <Header />
        <div className="main-container">
          <CategoryPanel />
          <Products addToCart = {addToCart}/>
        </div>
      </>
    )
  }
}

export default Counter
