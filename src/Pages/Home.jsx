import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setSetIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6508872656db83a34d9c788f.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setSetIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj, i) => <PizzaBlock key={i} {...obj} />)}
      </div>
    </>
  );
}
