import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1>Les presentamos</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src='images/mision.jpg'
                text='Nuestra misión'
                label='Misión'
                path='/mision'
              />
              <CardItem 
                src='images/productos.jpg'
                text='Productos'
                label='Productos'
                path='/products'
              />
              <CardItem 
                src='images/limpieza.jpg'
                text='Limpieza'
                label='Limpieza'
                path='/limpieza'
              />
              <CardItem 
                src='images/pack.jpg'
                text='Packs'
                label='Packs'
                path='/packs'
              />
              <CardItem 
                src='images/blog.jpg'
                text='Blog'
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