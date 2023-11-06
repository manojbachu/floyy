import {Component} from 'react'

import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

class Header extends Component {
  state = {cartCount: []}

  render() {
    const {cartCount} = this.state
    return (
      <div className="header-container">
        <h1 className="app-name">E-Commerce</h1>
        <div className="cart-container">
          <AiOutlineShoppingCart className="cart-icon" />
          {cartCount > 0 && <p className="cart-count">{cartCount}</p>}
        </div>
      </div>
    )
  }
}
export default Header
