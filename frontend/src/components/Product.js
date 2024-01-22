import React from 'react';
import './Product.css';


function Product({ id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    // console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }

    setTimeout(() => {
      setMessage('Товар добавлен в корзину.')
      setModalBox('MessageBox')
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => addToBasket()}>В корзину</button>
        </>
      )
    } else {
      return (
        <>
          <p>Требуется авторизация</p>
        </>
      )
    }
  }

  return (
    <div className="Product">
      
      <img src="https://ir-1.ozone.ru/s3/multimedia-d/c1000/6348631141.jpg" alt='Изображение товара' />
      <h1>{product.title}</h1>
      <p>{product.price} рублей</p>
      <AddToBasketButton />

    </div>
  );
}

export default Product;