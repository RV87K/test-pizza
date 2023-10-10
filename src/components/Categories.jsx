import React from 'react';

export default function Categories({ value, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoriesItem, i) => (
          <li onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoriesItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
