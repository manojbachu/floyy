import {Component} from 'react'
import './App.css'
import Counter from './components/Counter'

class App extends Component {
  state = {cartList: []}

  addToCart = id => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, id],
    }))
  }

  render() {
    return <Counter addToCart={this.addToCart} />
  }
}

export default App
