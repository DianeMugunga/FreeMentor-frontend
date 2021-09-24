import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Mentorship Programs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-10.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar.Porttitor lobortis arcu interdum neque enim.'
              label='Mentoring'
              path='/SignUp'
            />
            <CardItem
              src='images/img-16.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
              label='Our Program'
              path='/SignUp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
              label='Request Session'
              path='/services'
            />
            <CardItem
              src='images/img-14.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
              label='Meet a Mentor'
              path='/products'
            />
            <CardItem
              src='images/img-15.png'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.'
              label='Quick Question'
              path='/SignUp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
