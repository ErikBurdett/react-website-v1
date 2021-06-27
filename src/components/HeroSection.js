import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { MerchButton } from './MerchButton';

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
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LISTEN <i class="fas fa-dharmachakra"/>
        </Button>
        <MerchButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SHOP <i class="fas fa-dharmachakra"/>
        </MerchButton>
      </div>
    </div>
  );
}

export default HeroSection;
