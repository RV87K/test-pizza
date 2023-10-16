import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart'

function App() {

  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='cart/' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
