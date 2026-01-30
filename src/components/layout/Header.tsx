import React from 'react';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="brand">
          <div>
            <img src="/src/assets/images/crown.png" width="80px" />
          </div>
          <h3 className="hotel-heading">Grand Hotel</h3>
        </div>

        <div className="banner">
          <h1 className="banner-heading">Welcome To Grand Hotel</h1>
          <p className="banner-para">Make Your Life Luxurious</p>
          <Button className="banner-btn">
            Check Out
          </Button>
        </div>

      </header>
    </>
  )
}

export default Header;
