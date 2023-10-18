import React from 'react';

export default function Categories({ value, onChangeCategory }) {
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
