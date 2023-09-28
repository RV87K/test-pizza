import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import './scss/app.scss';

function App() {
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

  console.log(items);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((emptyItem, i) => <Skeleton key={i} />)
              : items.map((obj, i) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
