import {Component} from 'react'
import CategoryItem from '../CategoryItem'

import './index.css'

const categoryList = [
  {category: "Women's clothing", categoryId: 1},
  {category: "Men's Clothing", categoryId: 2},
  {category: 'Fashion Clothing', categoryId: 3},
  {category: 'Watches', categoryId: 4},
  {category: 'Electronics', categoryId: 5},
  {category: 'Fresh', categoryId: 6},
  {category: 'Groceries', categoryId: 7},
]

class CategoryPanel extends Component {
  render() {
    return (
      <ul className="category-panel">
        {categoryList.map(eachCategory => (
          <CategoryItem details={eachCategory} key={eachCategory.categoryId} />
        ))}
      </ul>
    )
  }
}

export default CategoryPanel
