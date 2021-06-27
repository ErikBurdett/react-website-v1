import React from 'react';
import '../App.css';
import { ListenButton } from './ListenButton';
import './HeroSection.css';
import { ShopButton } from './ShopButton';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>TELEPHONE HEATER</h1>
      <h4><i class="fas fa-dharmachakra"></i></h4>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SHOP
        </Button> */}
        <ListenButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LISTEN <i class="fas fa-dharmachakra"/>
        </ListenButton>
        <ShopButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SHOP <i class="fas fa-dharmachakra"/>
        </ShopButton>
      </div>
    </div>
  );
}

export default HeroSection;
