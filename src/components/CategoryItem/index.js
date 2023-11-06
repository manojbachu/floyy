import './index.css'

const CategoryItem = props => {
  const {details} = props
  const {category, categoryId} = details

  return (
    <li className="category-item">
      <button type="button" className="category-button">
        {category}
      </button>
    </li>
  )
}

export default CategoryItem
