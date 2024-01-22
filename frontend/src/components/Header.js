import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>
       <img width="50px" src="https://img.freepik.com/premium-vector/tokyo-japan-y2k-streetwear-style-colorful-slogan-typography-vector-design-icon-illustration_295412-293.jpg"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
      
    </div>

  );
}

export default Header;