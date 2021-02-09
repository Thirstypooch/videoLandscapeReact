import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blog.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/limpieza.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mision.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/pack.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/productos.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;