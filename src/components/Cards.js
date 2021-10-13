import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='card-h1'>Make it Real with Freelancer.</h1>
      <p className="card-p">Get some Inspirations from 1800+ skills</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src="images/img-9.jpg"
            text="Logo Design.
            $30 USD in 1 day."
            path='/services'
            />
            <CardItem 
            src="images/img-2.jpg"
            text="Package Design.
            $280 USD in 4 days"
            path='/services'
            />
            <CardItem 
            src="images/img-9.jpg"
            text="Mobile Design.
            $600 USD in 4 days."
            path='/services'
            />
            <CardItem 
            src="images/img-2.jpg"
            text="WordPress.
            $45 USD in 1 day"
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-3.jpg'
              text='Logo Design.
              $30 USD in 1 day.'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Website.
              $150 USD in 1 day.'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Website Design.
              $140 USD in 13 days.'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Illustration.
              $10 USD in 3 days.'
              path='/sign-up'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-3.jpg'
              text='WordPress.
              $150 USD in 18 days.'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Package Design.
              $100 USD in 6 days.'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Mobile Design.
              $100 USD in 1 day.'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Package Design.
              $155 USD in 2 days.'
              path='/sign-up'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-3.jpg'
              text='Website.
              $200 USD in 9 days.'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='3D Modeling.
              $110 USD in 28 days.'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Logo Design.
              $20 USD in 3 days.'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Graphic Design.
              $60 USD in 10 days.'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <div className='card-btns'>
        <Button
        className='btns'
        buttonStyle='btn--special'
        buttonsize='btn--xxl'
        >
          View More Projects
        </Button>
      </div>
      <div className="horizontalline">
        <hr />
      </div>
    </div>
  )
}

export default Cards
