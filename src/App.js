import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slice/counterSlice';

export const SearchContext = React.createContext('');
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart/" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
