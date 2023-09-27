import React from 'react';

export default function Categories() {

  const [categoryIndex, setCategoryIndex] = React.useState(0)
  const categories = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setCategoryIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoriesItem, i) => (
            <li onClick={() => onClickCategory(i)} className={categoryIndex === i ? 'active' : ''}>{categoriesItem}</li>
          ))
        }
      </ul>
    </div>
  );
}
