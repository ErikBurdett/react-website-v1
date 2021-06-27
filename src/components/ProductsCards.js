import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Merch: Prints, Clothing, and More!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://photos.smugmug.com/Popular-Prints/i-Jsmd8sW/0/8c5ffba8/L/32381883053-L.jpg'
              text=''
              label='Print'
              path="https://erikburdett.smugmug.com/Popular-Prints/i-Jsmd8sW/buy" />
            <Button/>
            

            <CardItem
              src='https://i.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaWhyLWluZ2VzdGlvbi1waXBlbGluZS1wcm9kdWN0aW9uLWRpc3Ryb2tpZC8yMDIwMTAyNDAxMTYwNDQ0NC8xOTU3NTU1OTU3OTMvcmVzb3VyY2VzLzE5NTc1NTU5NTc5My5qcGc=?ops=fit(480%2C480)'
              text='Over & Over - 2020'
              label='Album'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://lite-images-i.scdn.co/image/ab67616d00001e020b1fa0886d758266671593fa'
              text='Practice - 2021'
              label='Album'
              path='/sign-up'
            />
            <CardItem
              src='https://i1.sndcdn.com/artworks-uOh69n5vZw4OAyCQ-0kPnNg-t200x200.jpg'
              text='2049-9019 - 2020'
              label='Album'
              path='/sign-up'
            />
            <CardItem
              src='https://images-na.ssl-images-amazon.com/images/I/51ek2GZUcbL._SY445_SX342_QL70_ML2_.jpg'
              text='New Amarilla - 2020'
              label='Album'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;