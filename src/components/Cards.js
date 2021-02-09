import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Les presentamos !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/productos.jpg'
              text='PRODUCTOS'
              path='/products'
            />
            <CardItem 
              src='images/pack.jpg' 
              text='PACKS' 
              path='/packs' />

            <CardItem
              src='images/limpieza.jpg'
              text='LIMPIEZA'
              path='/limpieza'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mision.jpg'
              text='Creemos en el poder de lo natural'
              label='Misión'
              path='/mision'
            />

            <CardItem
              src='images/blog.jpg'
              text='Creamos productos naturales para el cuidado de la piel'
              label='Blog'
              path='/blog'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
