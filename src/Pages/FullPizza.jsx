import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6508872656db83a34d9c788f.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('не удалось загрузить пиццу:(');
        navigate('/')
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
