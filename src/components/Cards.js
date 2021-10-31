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
            src="images/imga.jpg"
            text="Logo Design.
            $30 USD in 1 day."
            path='/services'
            />
            <CardItem 
            src="images/imgb.jpg"
            text="Package Design.
            $280 USD in 4 days"
            path='/services'
            />
            <CardItem 
            src="images/imgf.jpg"
            text="Mobile Design.
            $600 USD in 4 days."
            path='/services'
            />
            <CardItem 
            src="images/imge.jpg"
            text="WordPress.
            $45 USD in 1 day"
            path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/imgg.jpg'
              text='Logo Design.
              $30 USD in 1 day.'
              path='/services'
            />
            <CardItem
              src='images/imgh.jpg'
              text='Website.
              $150 USD in 1 day.'
              path='/products'
            />
            <CardItem
              src='images/imgi.jpg'
              text='Website Design.
              $140 USD in 13 days.'
              path='/sign-up'
            />
            <CardItem
              src='images/imgj.jpg'
              text='Illustration.
              $10 USD in 3 days.'
              path='/sign-up'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/imgl.jpg'
              text='WordPress.
              $150 USD in 18 days.'
              path='/services'
            />
            <CardItem
              src='images/imgm.jpg'
              text='Package Design.
              $100 USD in 6 days.'
              path='/products'
            />
            <CardItem
              src='images/imgn.jpg'
              text='Mobile Design.
              $100 USD in 1 day.'
              path='/sign-up'
            />
            <CardItem
              src='images/imgo.jpg'
              text='Package Design.
              $155 USD in 2 days.'
              path='/sign-up'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/imgp.jpg'
              text='Website.
              $200 USD in 9 days.'
              path='/services'
            />
            <CardItem
              src='images/imgq.jpg'
              text='3D Modeling.
              $110 USD in 28 days.'
              path='/products'
            />
            <CardItem
              src='images/imgs.jpg'
              text='Logo Design.
              $20 USD in 3 days.'
              path='/sign-up'
            />
            <CardItem
              src='images/imgu.jpg'
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
